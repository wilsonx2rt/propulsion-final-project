from django.apps import AppConfig
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save


class UserAppConfig(AppConfig):
    name = 'project.user'

    def ready(self):
        User = get_user_model()
        from .signals import create_profile
        post_save.connect(create_profile, sender=User)
