# Generated by Django 2.0.3 on 2018-05-09 09:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_milestones', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='milestones',
            name='milestone_calendar_week',
            field=models.ForeignKey(blank=True, help_text='Meilenstein Kalenderwocke', null=True, on_delete=django.db.models.deletion.SET_NULL, to='helper_models.CalendarWeek', verbose_name='milestone calendar week'),
        ),
        migrations.DeleteModel(
            name='ClaendarWeek',
        ),
    ]
