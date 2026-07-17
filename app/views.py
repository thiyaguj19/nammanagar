from django.shortcuts import render
from random import randint
from django.db.models import F
from .models import SponsoredBy, Events, Sponsors

def home(request):
    context = {}
    return render(request, 'index.html', context)

def collective_prayer(request):
    return render(request, 'collective_prayer.html')

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

def reliefhome(request):
    picture = "https://nammanagar.s3.eu-north-1.amazonaws.com/nationalrelief/" + "ReliefMaterial-" + str(randint(0, 4)) + ".jpeg"
    context = {'picture': picture}
    print("picture = ", picture)
    return render(request, 'Wayand.html', context)
