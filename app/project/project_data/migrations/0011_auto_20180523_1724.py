# Generated by Django 2.0.3 on 2018-05-23 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_data', '0010_auto_20180523_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectdata',
            name='name',
            field=models.CharField(help_text='Project Namen', max_length=80, unique=True, verbose_name='project name'),
        ),
    ]