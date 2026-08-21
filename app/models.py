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
    (21 / 108 / Om). "Today" and "overall" counts shown on the
    collective-prayer page are simple aggregates over this table, so
    there's a single shared, site-wide counter across all devices.
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

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f'{self.get_chant_type_display()} | {self.created_at:%Y-%m-%d %H:%M}'


class PlaylistPlay(models.Model):
    """
    One row per time an mp3/hosted/YouTube prayer playlist actually
    starts playing. Covers the weekday collective-prayer playlists
    today, and is meant to cover any future mp3 japam playlists too —
    playlist_id is a free-form slug (e.g. "Monday", "japam-21") rather
    than a fixed choices list, so a brand-new playlist can start
    recording plays just by giving it an id in the template, with no
    model change or migration needed.

    "Today" and "overall" counts shown per playlist on the page are
    simple aggregates over this table, so there's a single shared,
    site-wide counter across all devices — same approach as
    JapamCompletion above.
    """
    playlist_id = models.CharField(max_length=64, db_index=True)
    playlist_label = models.CharField(max_length=100, blank=True, default="")
    created_at = models.DateTimeField(default=timezone.now, db_index=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f'{self.playlist_id} | {self.created_at:%Y-%m-%d %H:%M}'
