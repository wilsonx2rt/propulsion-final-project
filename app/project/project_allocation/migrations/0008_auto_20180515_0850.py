# Generated by Django 2.0.3 on 2018-05-15 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_allocation', '0007_auto_20180515_0847'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectallocation',
            name='quarter',
            field=models.CharField(choices=[('Q1', 'Q1'), ('Q2', 'Q2'), ('Q3', 'Q3'), ('Q4', 'Q4')], help_text='Quartal', max_length=20, null=True, verbose_name='quarter'),
        ),
    ]
