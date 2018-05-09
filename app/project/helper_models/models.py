from django.db import models


class Year(models.Model):
    year = models.CharField(
        verbose_name='year',
        help_text='jahr',
        max_length=4,
    )


class CalendarWeek(models.Model):
    week = models.CharField(
        verbose_name='calendar week',
        max_length=10,
    )
