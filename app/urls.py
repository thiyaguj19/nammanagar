from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.home, name='nagarhome'),
    path(r'', views.chaturthi, name='chaturthi'),
    path(r'iday/', views.idayhome, name='idayhome'),
    path(r'wayand/', views.reliefhome, name='reliefhome'),
]