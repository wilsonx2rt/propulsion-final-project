# Generated by Django 2.0.3 on 2018-05-11 20:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_dependencies', '0002_auto_20180510_1322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectdependencies',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_data.ProjectData', verbose_name='project name'),
        ),
    ]
