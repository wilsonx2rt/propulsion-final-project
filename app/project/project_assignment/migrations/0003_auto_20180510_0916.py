# Generated by Django 2.0.3 on 2018-05-10 09:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_assignment', '0002_auto_20180510_0835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectassignment',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_data.ProjectData', verbose_name='project assignment'),
        ),
    ]
