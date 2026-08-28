# management/commands/archive_old_japams.py
from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from app.models import JapamCompletion

class Command(BaseCommand):
    help = "Deletes raw logs older than 90 days (summaries remain safe)"

    def handle(self, *args, **options):
        cutoff = timezone.now() - timedelta(days=90)
        deleted_count, _ = JapamCompletion.objects.filter(created_at__lt=cutoff).delete()
        self.stdout.write(f"Archived {deleted_count} old raw records.")