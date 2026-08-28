from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Events)
admin.site.register(Sponsors)
admin.site.register(SponsoredBy)
admin.site.register(WalkLog)
admin.site.register(JapamCompletion)

@admin.register(JapamCompletion)
class JapamCompletionAdmin(admin.ModelAdmin):
    list_display = ('chant_type', 'created_at', 'duration_seconds')
    list_filter = ('chant_type', 'created_at')
    date_hierarchy = 'created_at'