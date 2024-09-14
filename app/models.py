from django.db import models

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

