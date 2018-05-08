from django.db import models


class FinancingDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class RequirementsAssessmentDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class CreditStatusDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


"""
Main
"""


class ProjectFinances(models.Model):
    project = models.ForeignKey(
        verbose_name='project assignment',
        to='pm_tool.ProjectData',
        on_delete='models.SET_NULL',
    )

    financing = models.ForeignKey(
        verbose_name='financing',
        help_text='Finanzierungsart / MIP Rubrik',
        on_delete=models.SET_NULL,
        to='pm_tool.FinancingDropdown',
        blank=True,
        null=True,
    )

    requirements_assessment = models.ForeignKey(
        verbose_name='requirements assessment',
        help_text='Bedürfnisabklärung',
        on_delete=models.SET_NULL,
        to='pm_tool.RequirementsAssessmentDropdown',
        blank=True,
        null=True,
    )

    credit_status = models.ForeignKey(
        verbose_name='credit status',
        help_text='Status Projektkredit',
        on_delete=models.SET_NULL,
        to='pm_tool.CreditStatusDropdown',
        blank=True,
        null=True,
    )

    investment_number = models.CharField(
        verbose_name='investment number',
        help_text='Investitions-Nr.',
        max_length=20,
        blank=True,
    )

    loan_budget = models.IntegerField(
        verbose_name='loan budget',
        help_text='Kredit- /Budgetsumme',
        blank=True,
    )

    third_party_contributions = models.IntegerField(
        verbose_name='third party contributions',
        help_text='Beiträge Dritter',
        blank=True,
    )

    net_expense_previous_years = models.IntegerField(
        verbose_name='net expense previous years',
        help_text='Netto-Ausgaben Vorjahre',
        blank=True,
    )

    remaining_credit_current_year = models.IntegerField(
        verbose_name='remaining credit current year',
        help_text='Kreditrest per 1.1. aktuelles Jahr',
        blank=True,
    )
    remaining_credit_current_year = models.IntegerField(
        verbose_name='remaining credit current year',
        help_text='',
        blank=True,
    )
