from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.nagarhome, name='nagarhome'),
    path(r'wayand/', views.reliefhome, name='reliefhome'),
]