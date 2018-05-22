# Generated by Django 2.0.3 on 2018-05-22 08:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_assignment', '0012_auto_20180516_1320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectassignment',
            name='project_management',
            field=models.ManyToManyField(blank=True, help_text='Projektleitung', related_name='project_assignments', to=settings.AUTH_USER_MODEL, verbose_name='project management'),
        ),
    ]