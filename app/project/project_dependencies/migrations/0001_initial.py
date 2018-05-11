# Generated by Django 2.0.3 on 2018-05-10 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('project_data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectDependencies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_dependencies', models.TextField(blank=True, help_text='Abhängigkeiten Inhaltlich', null=True, verbose_name='content dependencies')),
                ('time_dependencies', models.TextField(blank=True, help_text='Abhängigkeiten Zeitlich', null=True, verbose_name='time dependencies')),
                ('capacity_dependencies', models.TextField(blank=True, help_text='Abhängigkeiten Kapazitativ', null=True, verbose_name='capacity dependencies')),
                ('project', models.ForeignKey(on_delete='models.SET_NULL', to='project_data.ProjectData', verbose_name='project assignment')),
            ],
        ),
    ]
