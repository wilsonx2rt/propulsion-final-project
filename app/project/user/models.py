from django.conf import settings
from django.db import models

from .helpers import code_generator


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
    # abreviation = models.CharField(
    #     verbose_name='User initials',
    #     max_length=10,
    #     null=True,
    #     blank=True,
    # )
    code = models.CharField(
        verbose_name='code',
        help_text='Random code used for registration and for password reset',
        max_length=15,
        default=code_generator
    )

    def generate_new_code(self):
        self.code = code_generator()
        self.save()
        return self.code

    def __str__(self):
        return f'{self.user.username}'
