import json
from random import randint

from django.db.models import Count, F, Sum
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST

from .models import SponsoredBy, Events, Sponsors, JapamCompletion

VALID_JAPAM_CHANT_TYPES = {"21", "108", "om"}

# A single play-through longer than this is treated as bad client data
# (e.g. a media element reporting Infinity/NaN duration) and clamped down,
# so one bogus report can't blow up the "minutes played" totals.
MAX_JAPAM_DURATION_SECONDS = 3600


def home(request):
    context = {}
    return render(request, 'index.html', context)


def _format_duration_label(total_seconds):
    """e.g. 45 -> '45 நிமிடம்', 90 -> '1 மணி 30 நிமிடம்', 120 -> '2 மணி நேரம்'."""
    minutes = round((total_seconds or 0) / 60)
    if minutes < 60:
        return f"{minutes} நிமிடம்"
    hours, rem = divmod(minutes, 60)
    return f"{hours} மணி {rem} நிமிடம்" if rem else f"{hours} மணி நேரம்"


def _japam_counts():
    """
    Shared, site-wide (today, total) counts of completed japam sessions,
    along with the (today, total) minutes/hours actually played, in
    seconds, summed from each session's real playback duration.
    """
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    total = JapamCompletion.objects.count()
    today = JapamCompletion.objects.filter(created_at__gte=start_of_day).count()

    total_seconds = JapamCompletion.objects.aggregate(s=Sum("duration_seconds"))["s"] or 0
    today_seconds = (
        JapamCompletion.objects.filter(created_at__gte=start_of_day)
        .aggregate(s=Sum("duration_seconds"))["s"] or 0
    )
    return today, total, today_seconds, total_seconds


def _japam_counts_by_type():
    """
    Shared, site-wide (today, total) counts and (today, total) seconds
    played of completed japam sessions, broken down per chant type
    (21 / 108 / om), so each Mantra Japam card can show its own count
    and minutes/hours played instead of one combined number for all
    three. New chant types added to JapamCompletion.CHANT_CHOICES in
    future automatically get their own entry here with no extra code.
    """
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    empty_bucket = {"today": 0, "total": 0, "today_seconds": 0, "total_seconds": 0}
    counts = {chant_type: dict(empty_bucket) for chant_type, _ in JapamCompletion.CHANT_CHOICES}

    totals = JapamCompletion.objects.values("chant_type").annotate(n=Count("id"), secs=Sum("duration_seconds"))
    for row in totals:
        counts.setdefault(row["chant_type"], dict(empty_bucket))
        counts[row["chant_type"]]["total"] = row["n"]
        counts[row["chant_type"]]["total_seconds"] = row["secs"] or 0

    todays = (
        JapamCompletion.objects.filter(created_at__gte=start_of_day)
        .values("chant_type")
        .annotate(n=Count("id"), secs=Sum("duration_seconds"))
    )
    for row in todays:
        counts.setdefault(row["chant_type"], dict(empty_bucket))
        counts[row["chant_type"]]["today"] = row["n"]
        counts[row["chant_type"]]["today_seconds"] = row["secs"] or 0

    return counts


def collective_prayer(request):
    japam_today_count, japam_total_count, japam_today_seconds, japam_total_seconds = _japam_counts()
    context = {
        "japam_today_count": japam_today_count,
        "japam_total_count": japam_total_count,
        "japam_today_seconds": japam_today_seconds,
        "japam_total_seconds": japam_total_seconds,
        "japam_today_duration_label": _format_duration_label(japam_today_seconds),
        "japam_total_duration_label": _format_duration_label(japam_total_seconds),
        "japam_counts_by_type_json": json.dumps(_japam_counts_by_type()),
    }
    return render(request, 'collective_prayer.html', context)


@require_POST
@csrf_protect
def record_japam_completion(request):
    """
    POST body: {"chant_type": "21" | "108" | "om", "duration_seconds": <number, optional>}
    Returns: {"today": <int>, "total": <int>,
              "today_seconds": <int>, "total_seconds": <int>,
              "chant_type": <str>,
              "chant_today": <int>, "chant_total": <int>,
              "chant_today_seconds": <int>, "chant_total_seconds": <int>}
    """
    try:
        payload = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON")

    chant_type = str(payload.get("chant_type", ""))
    if chant_type not in VALID_JAPAM_CHANT_TYPES:
        chant_type = "21"

    try:
        duration_seconds = float(payload.get("duration_seconds", 0) or 0)
    except (TypeError, ValueError):
        duration_seconds = 0
    if duration_seconds != duration_seconds or duration_seconds in (float("inf"), float("-inf")):
        duration_seconds = 0  # NaN / Infinity from a media element with no known length
    duration_seconds = max(0, min(duration_seconds, MAX_JAPAM_DURATION_SECONDS))

    JapamCompletion.objects.create(chant_type=chant_type, duration_seconds=round(duration_seconds))

    japam_today_count, japam_total_count, japam_today_seconds, japam_total_seconds = _japam_counts()
    by_type = _japam_counts_by_type().get(chant_type, {"today": 0, "total": 0, "today_seconds": 0, "total_seconds": 0})
    return JsonResponse({
        "today": japam_today_count,
        "total": japam_total_count,
        "today_seconds": japam_today_seconds,
        "total_seconds": japam_total_seconds,
        "chant_type": chant_type,
        "chant_today": by_type["today"],
        "chant_total": by_type["total"],
        "chant_today_seconds": by_type["today_seconds"],
        "chant_total_seconds": by_type["total_seconds"],
    })


def sponsor(request):
    events = Events.objects.all()
    sponsor_list = []
    for event in events:
        sponsoredby = SponsoredBy.objects.filter(events_id=event.id)
        event_count = len(sponsoredby)
        if event_count > 0:
            sponsor_dict = {}
            isaevencount = event_count % 2
            event_name = ""
            sponsor_name = ""
            for index in range(event_count):
                modval = index % 2
                sponsorbyobj = sponsoredby[index]
                sponsor_dict['event'] = event.event_name
                sponsor_dict['sponsor'+'_'+str(modval)] = sponsorbyobj.sponsor.name
                sponsor_dict['amount'+'_'+str(modval)] = sponsorbyobj.amount
            sponsor_list.append(sponsor_dict)
            if isaevencount == 1:
                sponsor_dict = {}
                sponsor_dict['event'] = ''
                sponsor_dict['sponsor'+'_'+str(isaevencount)] = ''
                sponsor_dict['amount'+'_'+str(isaevencount)] = ''
                sponsor_list.append(sponsor_dict)
    return render(request, 'Sponsor.html', {"items": sponsor_list})
                

def chaturthi(request):
    context = {"max": 6, "img-path": "https://nammanagar.s3.eu-north-1.amazonaws.com/ganesh/", "extn": ".jpeg"}

    items = []
    for index in range(6):
        imagepath = "https://nammanagar.s3.eu-north-1.amazonaws.com/ganesh/VC-"+str(index+1)+".jpeg"
        items.insert(index, imagepath)
    return render(request, 'chaturthi.html', {"items": items})

def idayhome(request):
    context = {}
    return render(request, 'Independence.html', context)

def aug15(request):
    return render(request, 'aug15.html')

def iday_2025(request):
    return render(request, 'iday_2025.html')

def traffic_signals(request):
    return render(request, 'traffic_signals.html')

def reliefhome(request):
    picture = "https://nammanagar.s3.eu-north-1.amazonaws.com/nationalrelief/" + "ReliefMaterial-" + str(randint(0, 4)) + ".jpeg"
    context = {'picture': picture}
    print("picture = ", picture)
    return render(request, 'Wayand.html', context)


def sides_sample(request):
    return render(request, 'sides_sample.html')
