from django.shortcuts import render
from random import randint

def nagarhome(request):
    bucket = "https://nammanagar.blr1.cdn.digitaloceanspaces.com/"
    picture = "ReliefMaterial-" + str(randint(0, 4)) + ".jpeg"
    context = {'picture': picture, 'bucket': bucket}
    print("picture = ", picture)
    return render(request, 'Independence.html', context)

def reliefhome(request):
    picture = "https://nammanagar.blr1.cdn.digitaloceanspaces.com/wayand/" + "ReliefMaterial-" + str(randint(0, 4)) + ".jpeg"
    context = {'picture': picture}
    print("picture = ", picture)
    return render(request, 'Wayand.html', context)
