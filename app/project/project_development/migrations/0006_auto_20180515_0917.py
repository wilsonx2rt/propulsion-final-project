# Generated by Django 2.0.3 on 2018-05-15 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_development', '0005_auto_20180514_0945'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projectstatusdropdown',
            old_name='value',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='projecttendencydropdown',
            old_name='value',
            new_name='name',
        ),
    ]
