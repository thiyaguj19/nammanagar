from django.shortcuts import render
from random import randint

def home(request):
    context = {}
    return render(request, 'index.html', context)

def chaturthi(request):
    context = {}
    return render(request, 'chaturthi.html', context)

def sponsor(request):
    context = {}
    return render(request, 'Sponsor.html', context)

def chaturthi(request):
    context = {"max": 6, "img-path": "https://nammanagar.blr1.cdn.digitaloceanspaces.com/Chaturthi/2024/img/", "extn": ".jpeg"}

    items = []
    for index in range(6):
        imagepath = "https://nammanagar.blr1.cdn.digitaloceanspaces.com/Chaturthi/2024/img/VC-"+str(index+1)+".jpeg"
        items.insert(index, imagepath)
    return render(request, 'chaturthi.html', {"items": items})

def idayhome(request):
    context = {}
    return render(request, 'Independence.html', context)

def reliefhome(request):
    picture = "https://nammanagar.blr1.cdn.digitaloceanspaces.com/wayand/" + "ReliefMaterial-" + str(randint(0, 4)) + ".jpeg"
    context = {'picture': picture}
    print("picture = ", picture)
    return render(request, 'Wayand.html', context)
