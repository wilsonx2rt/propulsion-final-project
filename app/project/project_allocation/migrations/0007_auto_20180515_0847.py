# Generated by Django 2.0.3 on 2018-05-15 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project_allocation', '0006_auto_20180513_1921'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectallocation',
            name='quarter',
            field=models.ForeignKey(help_text='Quartal', null=True, on_delete=django.db.models.deletion.SET_NULL, to='helper_models.Quarters', verbose_name='quarter'),
        ),
    ]
