from django.db import models
from django.utils import timezone

class Events(models.Model):
    event_name   = models.CharField(max_length=50)
    event_start  = models.DateField()
    event_end    = models.DateField()
    event_status = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.event_name} | {self.event_start} | {self.event_end} | {self.event_status}'

class Sponsors(models.Model):
    name    = models.CharField(max_length=100)
    phone   = models.BigIntegerField(default=0)
    AREA    = [
                ('100', 'aravinda nagar'),
                ('200', 'aishwaryam garden'),
                ('300', 'indra nagar'),
                ('400', 'other'),
            ]
    nagar   = models.CharField(max_length=3, choices=AREA,
                              default='', help_text='Nagar', blank=True)

    def __str__(self):
        return f'{self.name} | {self.phone} | {self.nagar}'

class SponsoredBy(models.Model):
    events = models.ForeignKey(Events, on_delete=models.CASCADE)
    sponsor = models.ForeignKey(Sponsors, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.events.event_name} | {self.sponsor.name} | {self.amount}'

class ActiveJapamState(models.Model):
    status = models.CharField(max_length=20, default="completed")  # "playing", "paused", "completed"
    label = models.CharField(max_length=100, blank=True, default="")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.label} - {self.status} (Updated: {self.updated_at:%H:%M:%S})"
        
class DailyJapamSummary(models.Model):
    date = models.DateField(unique=True, db_index=True)
    total_count = models.PositiveIntegerField(default=0)
    total_duration_seconds = models.BigIntegerField(default=0)
    
    # Store JSON breakdown by chant type if needed: {"21": 15, "108": 5}
    chant_breakdown = models.JSONField(default=dict)

    class Meta:
        ordering = ["-date"]

class JapamCompletion(models.Model):
    """
    One row per successful play-through of a Gayathri japam track
    (21 / 108 / Om). "Today" and "overall" counts *and* minutes/hours
    played shown on the collective-prayer page are simple aggregates
    over this table, so there's a single shared, site-wide counter
    across all devices.
    """
    CHANT_21 = "21"
    CHANT_108 = "108"
    CHANT_OM = "om"
    CHANT_SHIVAYA = "shivaya"
    CHANT_CHOICES = [
        (CHANT_21, "21 Gayathri Japam"),
        (CHANT_108, "108 Gayathri Japam"),
        (CHANT_OM, "Om Japam"),
        (CHANT_SHIVAYA, "Om Namah Shivaya Japam"),
    ]

    chant_type = models.CharField(max_length=20, choices=CHANT_CHOICES, default=CHANT_21)
    created_at = models.DateTimeField(default=timezone.now, db_index=True)
    # Actual length of that single play-through, in seconds, as reported by
    # the browser's media element when it fired "ended". 0 for legacy rows
    # recorded before this field existed, or if the browser couldn't report
    # a finite duration. Used to add up minutes/hours played per chant type
    # and overall, without needing to hardcode a duration per track.
    duration_seconds = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        super().save(*args, **kwargs)
        
        if is_new:
            today = timezone.now().date()
            summary, _ = DailyJapamSummary.objects.get_or_create(date=today)
            DailyJapamSummary.objects.filter(date=today).update(
                total_count=F("total_count") + 1,
                total_duration_seconds=F("total_duration_seconds") + self.duration_seconds
            )

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["chant_type", "created_at"]),
        ]

    def __str__(self):
        return f'{self.get_chant_type_display()} | {self.created_at:%Y-%m-%d %H:%M} | {self.duration_seconds}s'


class Walker(models.Model):
    """
    One row per person who has ever logged a walk. Looked up by name
    (case-insensitively, see views._find_or_create_walker) so a
    returning walker's later entries get attached to this same row
    instead of creating a duplicate person. age/weight_kg hold the
    walker's most recently reported values for quick display; the full
    weight-over-time history lives on each WalkLog row below.
    """
    name = models.CharField(max_length=100, unique=True)
    age = models.PositiveSmallIntegerField()
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2, help_text="Most recently logged weight, kg")
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return f'{self.name} | age {self.age} | {self.weight_kg} kg'


class WalkLog(models.Model):
    """
    One row per walk a person logs: that day's weight, distance walked,
    and calories burnt. The daily/weekly graphs on the walking-log page
    are simple aggregates over this table grouped by logged_at, so
    nothing needs to be precomputed or cached.
    """
    walker = models.ForeignKey(Walker, on_delete=models.CASCADE, related_name="walk_logs")
    logged_at = models.DateTimeField(default=timezone.now, db_index=True)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2)
    distance_km = models.DecimalField(max_digits=6, decimal_places=2)
    calories_burnt = models.DecimalField(max_digits=7, decimal_places=2)

    class Meta:
        ordering = ["-logged_at"]

    def __str__(self):
        return f'{self.walker.name} | {self.logged_at:%Y-%m-%d} | {self.distance_km} km | {self.calories_burnt} kcal'
