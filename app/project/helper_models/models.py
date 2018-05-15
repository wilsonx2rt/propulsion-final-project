from django.db import models


class Year(models.Model):
    name = models.CharField(
        verbose_name='year',
        help_text='jahr',
        max_length=4,
        null=True,
    )

    def __str__(self):
        return self.year


class CalendarWeek(models.Model):
    name = models.CharField(
        verbose_name='calendar week',
        max_length=10,
        null=True,
    )

    def __str__(self):
        return self.week


class Quarters(models.Model):
    name = models.CharField(
        verbose_name='quarter',
        max_length=2,
        null=True,
    )
