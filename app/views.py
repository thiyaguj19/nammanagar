import json
from decimal import Decimal, InvalidOperation
from datetime import timedelta
from random import randint

from django.views.decorators.csrf import csrf_exempt
from .models import ActiveJapamState

from django.db.models import Count, F, Sum
from django.db.models.functions import TruncDate, TruncWeek
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST

from .models import SponsoredBy, Events, Sponsors, JapamCompletion, Walker, WalkLog

VALID_JAPAM_CHANT_TYPES = {"21", "108", "om", "shivaya"}

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


def walking_log(request):
    """Renders the walking-tracker page with the lifetime distance leaders."""
    leaders = (
        Walker.objects.annotate(total_distance_km=Sum("walk_logs__distance_km"))
        .filter(total_distance_km__isnull=False)
        .order_by("-total_distance_km", "name")[:3]
    )
    context = {"distance_leaders": leaders}
    return render(request, 'walking_log.html', context)


def _find_or_create_walker(name, age, weight_kg):
    """
    Case-insensitive lookup by name so a returning walker's new entry
    lands on their existing row instead of creating a duplicate person.
    Age/weight are refreshed to whatever was just submitted, since
    those are expected to change over time.
    """
    name = (name or "").strip()
    walker = Walker.objects.filter(name__iexact=name).first()
    if walker:
        walker.age = age
        walker.weight_kg = weight_kg
        walker.save(update_fields=["age", "weight_kg"])
        return walker
    return Walker.objects.create(name=name, age=age, weight_kg=weight_kg)


def walking_log_typeahead(request):
    """GET ?q=<partial name> -> up to 8 matching existing walkers, for the name type-ahead."""
    query = (request.GET.get("q") or "").strip()
    if not query:
        return JsonResponse({"results": []})

    matches = Walker.objects.filter(name__icontains=query).order_by("name")[:8]
    results = [
        {"id": w.id, "name": w.name, "age": w.age, "weight_kg": str(w.weight_kg)}
        for w in matches
    ]
    return JsonResponse({"results": results})


@require_POST
@csrf_protect
def record_walk_log(request):
    """
    POST body: {"walker_id": <int, optional>, "name": <str>, "age": <int>,
                "weight_kg": <number>, "distance_km": <number>, "calories_burnt": <number>}

    If walker_id is present (the person was picked from the type-ahead
    list) it's used directly. Otherwise the name is matched
    case-insensitively against existing walkers, creating a new one only
    if nobody by that name has logged a walk before — this is what makes
    a returning walker's entry land in their existing log.

    Returns: {"walker": {...}, "log": {...}}
    """
    try:
        payload = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON")

    name = str(payload.get("name") or "").strip()
    walker_id = payload.get("walker_id")

    try:
        age = int(payload.get("age"))
        weight_kg = Decimal(str(payload.get("weight_kg")))
        distance_km = Decimal(str(payload.get("distance_km")))
        calories_burnt = Decimal(str(payload.get("calories_burnt")))
    except (TypeError, ValueError, InvalidOperation):
        return HttpResponseBadRequest("Invalid number in age/weight_kg/distance_km/calories_burnt")

    if not (0 < age <= 130):
        return HttpResponseBadRequest("Age out of range")
    if weight_kg <= 0 or distance_km < 0 or calories_burnt < 0:
        return HttpResponseBadRequest("Value out of range")

    walker = Walker.objects.filter(id=walker_id).first() if walker_id else None
    if walker:
        walker.age = age
        walker.weight_kg = weight_kg
        walker.save(update_fields=["age", "weight_kg"])
    else:
        if not name:
            return HttpResponseBadRequest("Name is required")
        walker = _find_or_create_walker(name, age, weight_kg)

    walk = WalkLog.objects.create(
        walker=walker,
        weight_kg=weight_kg,
        distance_km=distance_km,
        calories_burnt=calories_burnt,
    )

    return JsonResponse({
        "walker": {"id": walker.id, "name": walker.name, "age": walker.age, "weight_kg": str(walker.weight_kg)},
        "log": {
            "id": walk.id,
            "logged_at": walk.logged_at.isoformat(),
            "distance_km": str(walk.distance_km),
            "calories_burnt": str(walk.calories_burnt),
            "weight_kg": str(walk.weight_kg),
        },
    })


def walking_log_data(request):
    """
    GET ?walker_id=<int>&range=daily|weekly

    Returns chart-ready data for one walker: the last 14 days (daily) or
    last 8 ISO weeks (weekly) of total distance/calories, their full
    weight history for the weight-trend chart, lifetime totals, and
    their 5 most recent walks.
    """
    walker_id = request.GET.get("walker_id")
    range_type = request.GET.get("range", "daily")
    walker = Walker.objects.filter(id=walker_id).first()
    if not walker:
        return HttpResponseBadRequest("Unknown walker_id")

    today = timezone.localtime().date()
    logs = WalkLog.objects.filter(walker=walker)

    # Don't show empty buckets from before this walker's first-ever log —
    # e.g. if they only started logging a few days ago, the chart should
    # start there instead of padding out to a fixed 14-day/8-week window.
    earliest_log = logs.order_by("logged_at").values_list("logged_at", flat=True).first()
    earliest_date = earliest_log.date() if earliest_log else today

    if range_type == "weekly":
        num_buckets = 8
        this_week_start = today - timedelta(days=today.weekday())
        earliest_week_start = earliest_date - timedelta(days=earliest_date.weekday())
        all_week_starts = [this_week_start - timedelta(weeks=i) for i in range(num_buckets - 1, -1, -1)]
        bucket_starts = [w for w in all_week_starts if w >= earliest_week_start]
        bucket_field = TruncWeek("logged_at")
    else:
        num_buckets = 14
        all_day_starts = [today - timedelta(days=i) for i in range(num_buckets - 1, -1, -1)]
        bucket_starts = [d for d in all_day_starts if d >= earliest_date]
        bucket_field = TruncDate("logged_at")

    rows = (
        logs.filter(logged_at__date__gte=bucket_starts[0])
        .annotate(bucket=bucket_field)
        .values("bucket")
        .annotate(distance=Sum("distance_km"), calories=Sum("calories_burnt"))
    )
    by_bucket = {}
    for row in rows:
        b = row["bucket"]
        b_date = b.date() if hasattr(b, "date") else b
        by_bucket[b_date] = row

    labels, distances, calories_list = [], [], []
    for bucket_date in bucket_starts:
        row = by_bucket.get(bucket_date)
        labels.append(bucket_date.strftime("%d %b"))
        distances.append(float(row["distance"]) if row and row["distance"] else 0)
        calories_list.append(float(row["calories"]) if row and row["calories"] else 0)

    weight_history = list(logs.order_by("logged_at").values_list("logged_at", "weight_kg")[:200])
    weight_labels = [dt.strftime("%d %b") for dt, _ in weight_history]
    weight_values = [float(w) for _, w in weight_history]

    totals = logs.aggregate(total_distance=Sum("distance_km"), total_calories=Sum("calories_burnt"))

    recent = [
        {
            "logged_at": r.logged_at.strftime("%d %b %Y, %I:%M %p"),
            "distance_km": str(r.distance_km),
            "calories_burnt": str(r.calories_burnt),
            "weight_kg": str(r.weight_kg),
        }
        for r in logs.order_by("-logged_at")[:5]
    ]

    return JsonResponse({
        "labels": labels,
        "distance_km": distances,
        "calories_burnt": calories_list,
        "weight_labels": weight_labels,
        "weight_kg": weight_values,
        "recent": recent,
        "summary": {
            "name": walker.name,
            "age": walker.age,
            "latest_weight_kg": float(walker.weight_kg),
            "walk_count": logs.count(),
            "total_distance_km": float(totals["total_distance"] or 0),
            "total_calories_burnt": float(totals["total_calories"] or 0),
        },
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

@csrf_exempt
def update_japam_state(request):
    state, _ = ActiveJapamState.objects.get_or_create(id=1)
    
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            state.status = data.get("status", "completed")
            state.label = data.get("label", "")
            state.save()
            return JsonResponse({"status": "success"})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

    # GET response
    return JsonResponse({
        "status": state.status,
        "label": state.label,
        "timestamp": int(state.updated_at.timestamp() * 1000)
    })