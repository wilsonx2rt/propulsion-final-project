# Generated by Django 2.0.3 on 2018-05-17 09:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('helper_models', '0007_auto_20180515_0911'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='year',
            options={'ordering': ['name']},
        ),
    ]