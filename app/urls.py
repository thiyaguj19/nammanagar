from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.home, name='nagarhome'),
    path(r'sides-sample/', views.sides_sample, name='sides_sample'),
    path(r'aug15/', views.aug15, name='aug15'),
    path(r'iday/2025/', views.iday_2025, name='iday_2025'),
    path(r'chaturthi/', views.chaturthi, name='chaturthi'),
    path(r'iday/', views.idayhome, name='idayhome'),
    path(r'wayand/', views.reliefhome, name='reliefhome'),
    path(r'sponsor/', views.sponsor, name='sponsor'),
    path(r'collective-prayer/', views.collective_prayer, name='collective_prayer'),
    path(r'collective-prayer/japam/record/', views.record_japam_completion, name='record_japam_completion'),
    path(r'walking-log/', views.walking_log, name='walking_log'),
    path(r'walking-log/typeahead/', views.walking_log_typeahead, name='walking_log_typeahead'),
    path(r'walking-log/record/', views.record_walk_log, name='record_walk_log'),
    path(r'walking-log/data/', views.walking_log_data, name='walking_log_data'),
    path(r'traffic-signals/', views.traffic_signals, name='traffic_signals'),
]
