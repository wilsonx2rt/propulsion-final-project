# Generated by Django 2.0.3 on 2018-05-09 09:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectDevelopment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectStatusDropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=20, verbose_name='status value')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectTendencyDropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=20, verbose_name='tendency value')),
            ],
        ),
        migrations.AddField(
            model_name='projectdevelopment',
            name='project_status',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_development.ProjectStatusDropdown', verbose_name='project status'),
        ),
        migrations.AddField(
            model_name='projectdevelopment',
            name='project_tendency',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_development.ProjectTendencyDropdown', verbose_name='project tendency'),
        ),
    ]
