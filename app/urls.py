from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.home, name='nagarhome'),
    path(r'aug15/', views.aug15, name='aug15'),
    path(r'iday/2025/', views.iday_2025, name='iday_2025'),
    path(r'chaturthi/', views.chaturthi, name='chaturthi'),
    path(r'iday/', views.idayhome, name='idayhome'),
    path(r'wayand/', views.reliefhome, name='reliefhome'),
    path(r'sponsor/', views.sponsor, name='sponsor'),
    path(r'collective-prayer/', views.collective_prayer, name='collective_prayer'),
]