import json
from random import randint

from django.db.models import Count, F
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST

from .models import SponsoredBy, Events, Sponsors, JapamCompletion

VALID_JAPAM_CHANT_TYPES = {"21", "108", "om"}


def home(request):
    context = {}
    return render(request, 'index.html', context)


def _japam_counts():
    """Shared, site-wide (today, total) counts of completed japam sessions."""
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    total = JapamCompletion.objects.count()
    today = JapamCompletion.objects.filter(created_at__gte=start_of_day).count()
    return today, total


def _japam_counts_by_type():
    """
    Shared, site-wide (today, total) counts of completed japam
    sessions, broken down per chant type (21 / 108 / om), so each
    Mantra Japam card can show its own count instead of one combined
    number for all three.
    """
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    counts = {chant_type: {"today": 0, "total": 0} for chant_type, _ in JapamCompletion.CHANT_CHOICES}

    totals = JapamCompletion.objects.values("chant_type").annotate(n=Count("id"))
    for row in totals:
        counts.setdefault(row["chant_type"], {"today": 0, "total": 0})
        counts[row["chant_type"]]["total"] = row["n"]

    todays = (
        JapamCompletion.objects.filter(created_at__gte=start_of_day)
        .values("chant_type")
        .annotate(n=Count("id"))
    )
    for row in todays:
        counts.setdefault(row["chant_type"], {"today": 0, "total": 0})
        counts[row["chant_type"]]["today"] = row["n"]

    return counts


def collective_prayer(request):
    japam_today_count, japam_total_count = _japam_counts()
    context = {
        "japam_today_count": japam_today_count,
        "japam_total_count": japam_total_count,
        "japam_counts_by_type_json": json.dumps(_japam_counts_by_type()),
    }
    return render(request, 'collective_prayer.html', context)


@require_POST
@csrf_protect
def record_japam_completion(request):
    """
    POST body: {"chant_type": "21" | "108" | "om"}
    Returns: {"today": <int>, "total": <int>, "chant_type": <str>,
              "chant_today": <int>, "chant_total": <int>}
    """
    try:
        payload = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON")

    chant_type = str(payload.get("chant_type", ""))
    if chant_type not in VALID_JAPAM_CHANT_TYPES:
        chant_type = "21"

    JapamCompletion.objects.create(chant_type=chant_type)

    japam_today_count, japam_total_count = _japam_counts()
    by_type = _japam_counts_by_type().get(chant_type, {"today": 0, "total": 0})
    return JsonResponse({
        "today": japam_today_count,
        "total": japam_total_count,
        "chant_type": chant_type,
        "chant_today": by_type["today"],
        "chant_total": by_type["total"],
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
