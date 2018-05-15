# Generated by Django 2.0.3 on 2018-05-15 11:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_milestones', '0009_auto_20180515_1040'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='milestones',
            options={'verbose_name_plural': 'Milestones'},
        ),
        migrations.AlterField(
            model_name='milestones',
            name='milestone_calendar_week',
            field=models.ForeignKey(blank=True, help_text='Meilenstein Kalenderwocke', null=True, on_delete=django.db.models.deletion.SET_NULL, to='helper_models.CalendarWeek', verbose_name='milestone calendar week'),
        ),
        migrations.AlterField(
            model_name='milestones',
            name='milestone_value',
            field=models.ForeignKey(blank=True, help_text='Meilstein Inhalt', null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_milestones.MilestoneDropdown', verbose_name='milestone value'),
        ),
        migrations.AlterField(
            model_name='milestones',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='project_milestones', to='project_data.ProjectData', verbose_name='project name'),
        ),
    ]
