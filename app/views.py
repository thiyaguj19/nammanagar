import json
from random import randint

from django.db.models import Count, F
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST

from .models import SponsoredBy, Events, Sponsors, JapamCompletion, PlaylistPlay

VALID_JAPAM_CHANT_TYPES = {"21", "108", "om"}
MAX_PLAYLIST_ID_LENGTH = 64
MAX_PLAYLIST_LABEL_LENGTH = 100


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


def _all_playlist_counts():
    """
    Shared, site-wide (today, total) play counts for every playlist_id
    seen so far, keyed by playlist_id. Used to pre-populate the page
    so each playlist's badge shows real counts on first load, instead
    of waiting for the next play to be recorded. Works the same for
    the current weekday playlists and any future mp3 japam playlist —
    nothing here needs updating when a new playlist_id shows up.
    """
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    counts = {}
    totals = PlaylistPlay.objects.values("playlist_id").annotate(n=Count("id"))
    for row in totals:
        counts[row["playlist_id"]] = {"today": 0, "total": row["n"]}

    todays = (
        PlaylistPlay.objects.filter(created_at__gte=start_of_day)
        .values("playlist_id")
        .annotate(n=Count("id"))
    )
    for row in todays:
        counts.setdefault(row["playlist_id"], {"today": 0, "total": 0})
        counts[row["playlist_id"]]["today"] = row["n"]

    return counts


def _playlist_counts(playlist_id):
    """Shared, site-wide (today, total) play counts for one playlist_id."""
    now_local = timezone.localtime()
    start_of_day = now_local.replace(hour=0, minute=0, second=0, microsecond=0)

    qs = PlaylistPlay.objects.filter(playlist_id=playlist_id)
    total = qs.count()
    today = qs.filter(created_at__gte=start_of_day).count()
    return today, total


def collective_prayer(request):
    japam_today_count, japam_total_count = _japam_counts()
    context = {
        "japam_today_count": japam_today_count,
        "japam_total_count": japam_total_count,
        "playlist_play_counts_json": json.dumps(_all_playlist_counts()),
    }
    return render(request, 'collective_prayer.html', context)


@require_POST
@csrf_protect
def record_japam_completion(request):
    """
    POST body: {"chant_type": "21" | "108" | "om"}
    Returns: {"today": <int>, "total": <int>}
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
    return JsonResponse({"today": japam_today_count, "total": japam_total_count})


@require_POST
@csrf_protect
def record_playlist_play(request):
    """
    POST body: {"playlist_id": "Monday", "playlist_label": "திங்கள்"}
    Returns: {"playlist_id": <str>, "today": <int>, "total": <int>}

    playlist_id is free-form on purpose — any current weekday playlist,
    or any future mp3 japam playlist, can start recording plays here
    just by sending its own id. No model/migration change needed to
    add a new playlist.
    """
    try:
        payload = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON")

    playlist_id = str(payload.get("playlist_id", "")).strip()[:MAX_PLAYLIST_ID_LENGTH]
    if not playlist_id:
        return HttpResponseBadRequest("playlist_id is required")

    playlist_label = str(payload.get("playlist_label", "")).strip()[:MAX_PLAYLIST_LABEL_LENGTH]

    PlaylistPlay.objects.create(playlist_id=playlist_id, playlist_label=playlist_label)

    today, total = _playlist_counts(playlist_id)
    return JsonResponse({"playlist_id": playlist_id, "today": today, "total": total})


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
