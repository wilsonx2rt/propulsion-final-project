# Generated by Django 2.0.3 on 2018-05-13 19:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_allocation', '0005_auto_20180511_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectallocation',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='project_allocations', to='project_data.ProjectData', verbose_name='project name'),
        ),
    ]
