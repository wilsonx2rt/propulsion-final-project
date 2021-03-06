# Generated by Django 2.0.3 on 2018-05-09 09:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('project_data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CreditStatusDropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='name')),
            ],
        ),
        migrations.CreateModel(
            name='FinancingDropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='name')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectFinances',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('investment_number', models.CharField(blank=True, help_text='Investitions-Nr.', max_length=20, verbose_name='investment number')),
                ('loan_budget', models.IntegerField(blank=True, help_text='Kredit- /Budgetsumme', verbose_name='loan budget')),
                ('third_party_contributions', models.IntegerField(blank=True, help_text='Beiträge Dritter', verbose_name='third party contributions')),
                ('net_expense_previous_years', models.IntegerField(blank=True, help_text='Netto-Ausgaben Vorjahre', verbose_name='net expense previous years')),
                ('remaining_credit_current_year', models.IntegerField(blank=True, help_text='Kreditrest per 1.1. aktuelles Jahr', verbose_name='remaining credit current year')),
                ('spending_current_year', models.IntegerField(blank=True, help_text='Ist Ausgaben aktuelles Jahr', verbose_name='spending current year')),
                ('forecast_current_year', models.IntegerField(blank=True, help_text='Prognose laufendes Jahr', verbose_name='forecast current year')),
                ('remaining_credit_following_year', models.IntegerField(blank=True, help_text='Kreditrest per 1.1. folgendes Jahr', verbose_name='remaining credit following year')),
                ('VAT_following_year', models.IntegerField(blank=True, help_text='Mehrwertabschöpfung folgendes Jahr', verbose_name='VAT following year')),
                ('forecast_following_year', models.IntegerField(blank=True, help_text='Prognose folgendes Jahr', verbose_name='forecast following year')),
                ('VAT_further_years', models.IntegerField(blank=True, help_text='Mehrwertabschöpfung weitere Jahre', verbose_name='VAT following year')),
                ('forecast_further_years', models.IntegerField(blank=True, help_text='Prognose weitere Jahre', verbose_name='forecast further years')),
                ('credit_status', models.ForeignKey(blank=True, help_text='Status Projektkredit', null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_finances.CreditStatusDropdown', verbose_name='credit status')),
                ('financing', models.ForeignKey(blank=True, help_text='Finanzierungsart / MIP Rubrik', null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_finances.FinancingDropdown', verbose_name='financing')),
                ('project', models.ForeignKey(on_delete='models.SET_NULL', to='project_data.ProjectData', verbose_name='project assignment')),
            ],
        ),
        migrations.CreateModel(
            name='RequirementsAssessmentDropdown',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='name')),
            ],
        ),
        migrations.AddField(
            model_name='projectfinances',
            name='requirements_assessment',
            field=models.ForeignKey(blank=True, help_text='Bedürfnisabklärung', null=True, on_delete=django.db.models.deletion.SET_NULL, to='project_finances.RequirementsAssessmentDropdown', verbose_name='requirements assessment'),
        ),
    ]
