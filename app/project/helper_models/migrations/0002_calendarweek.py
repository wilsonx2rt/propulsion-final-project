# Generated by Django 2.0.3 on 2018-05-09 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('helper_models', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CalendarWeek',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week', models.CharField(max_length=10, verbose_name='calendar week')),
            ],
        ),
    ]