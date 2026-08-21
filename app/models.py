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
    CHANT_CHOICES = [
        (CHANT_21, "21 Gayathri Japam"),
        (CHANT_108, "108 Gayathri Japam"),
        (CHANT_OM, "Om Japam"),
    ]

    chant_type = models.CharField(max_length=10, choices=CHANT_CHOICES, default=CHANT_21)
    created_at = models.DateTimeField(default=timezone.now, db_index=True)
    # Actual length of that single play-through, in seconds, as reported by
    # the browser's media element when it fired "ended". 0 for legacy rows
    # recorded before this field existed, or if the browser couldn't report
    # a finite duration. Used to add up minutes/hours played per chant type
    # and overall, without needing to hardcode a duration per track.
    duration_seconds = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f'{self.get_chant_type_display()} | {self.created_at:%Y-%m-%d %H:%M} | {self.duration_seconds}s'
