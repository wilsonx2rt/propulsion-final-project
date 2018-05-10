from django.conf import settings
from django.db import models


class Year(models.Model):
    year = models.CharField(
        verbose_name='year',
        help_text='jahr',
        max_length=4,
    )

    def __str__(self):
        return self.year


class CalendarWeek(models.Model):
    week = models.CharField(
        verbose_name='calendar week',
        max_length=10,
    )

    def __str__(self):
        return self.week


class UserProfile(models.Model):
    user = models.OneToOneField(
        verbose_name="user",
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user_profile",
    )
    isAdmin = models.BooleanField(
        verbose_name='User is admin',
        default=False,
    )

    def __str__(self):
        return self.user.username