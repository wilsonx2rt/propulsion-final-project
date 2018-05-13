from django.db import models


class FinancingDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


class RequirementsAssessmentDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


class CreditStatusDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


class YearlyForecast(models.Model):
    project = models.ForeignKey(
        verbose_name='project name',
        to='project_data.ProjectData',
        on_delete=models.SET_NULL,
        null=True,
    )

    year = models.ForeignKey(
        verbose_name='year',
        help_text='Jahr',
        on_delete=models.SET_NULL,
        to='helper_models.Year',
        null=True,
        blank=True,
    )
    VAT = models.IntegerField(
        verbose_name='VAT',
        help_text='Mehrwertabschöpfung',
        blank=True,
        null=True,
    )

    forecast_further_years = models.IntegerField(
        verbose_name='forecast',
        help_text='Prognose',
        blank=True,
        null=True,
    )

    def __str__(self):
        str = f'{self.year} Prognose {self.project}'
        return str


"""
Main
"""


class ProjectFinances(models.Model):
    project = models.ForeignKey(
        verbose_name='project name',
        to='project_data.ProjectData',
        related_name='project_finances',
        on_delete=models.SET_NULL,
        null=True,
    )

    financing = models.ForeignKey(
        verbose_name='financing',
        help_text='Finanzierungsart / MIP Rubrik',
        on_delete=models.SET_NULL,
        to='project_finances.FinancingDropdown',
        blank=True,
        null=True,
    )

    requirements_assessment = models.ForeignKey(
        verbose_name='requirements assessment',
        help_text='Bedürfnisabklärung',
        on_delete=models.SET_NULL,
        to='project_finances.RequirementsAssessmentDropdown',
        blank=True,
        null=True,
    )

    credit_status = models.ForeignKey(
        verbose_name='credit status',
        help_text='Status Projektkredit',
        on_delete=models.SET_NULL,
        to='project_finances.CreditStatusDropdown',
        blank=True,
        null=True,
    )

    investment_number = models.CharField(
        verbose_name='investment number',
        help_text='Investitions-Nr.',
        max_length=20,
        blank=True,
        null=True,
    )

    loan_budget = models.IntegerField(
        verbose_name='loan budget',
        help_text='Kredit- /Budgetsumme',
        blank=True,
        null=True
    )

    third_party_contributions = models.IntegerField(
        verbose_name='third party contributions',
        help_text='Beiträge Dritter',
        blank=True,
        null=True,
    )

    net_expense_previous_years = models.IntegerField(
        verbose_name='net expense previous years',
        help_text='Netto-Ausgaben Vorjahre',
        blank=True,
        null=True,
    )

    remaining_credit_current_year = models.IntegerField(
        verbose_name='remaining credit current year',
        help_text='Kreditrest per 1.1. aktuelles Jahr',
        blank=True,
        null=True,
    )

    spending_current_year = models.IntegerField(
        verbose_name='spending current year',
        help_text='Ist Ausgaben aktuelles Jahr',
        blank=True,
        null=True,
    )

    forecast_current_year = models.IntegerField(
        verbose_name='forecast current year',
        help_text='Prognose laufendes Jahr',
        blank=True,
        null=True,
    )

    remaining_credit_following_year = models.IntegerField(
        verbose_name='remaining credit following year',
        help_text='Kreditrest per 1.1. folgendes Jahr',
        blank=True,
        null=True,
    )

    yearly_forecasts = models.ForeignKey(
        verbose_name='yearly forecasts',
        help_text='Prognosen',
        on_delete=models.SET_NULL,
        to='project_finances.YearlyForecast',
        null=True,
        blank=True,
    )

    def __str__(self):
        return f'{self.project}'
