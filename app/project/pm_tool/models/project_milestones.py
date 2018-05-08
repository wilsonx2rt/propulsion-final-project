from django.db import models


class ClaendarWeek(models.Model):
    week = models.CharField(
        verbose_name='calendar week',
        max_length=10,
    )


class MilestoneDropdown(models.Model):
    value = models.CharField(
        verbose_name='milestone dropdown value',
        max_length=20,
    )


class TendenciesDropdown(models.Model):
    value = models.CharField(
        verbose_name='tendencies dropdown value',
        max_length=20,
    )


class CommentaryOptions(models.Model):
    external_factors = models.TextField(
        verbose_name='external factors',
        help_text='Einfluss externe Faktoren',
        null=True,
        blank=True,
    )

    communications = models.TextField(
        verbose_name='communications',
        help_text='Kommunicaton',
        null=True,
        blank=True
    )


"""
Main
"""


class Milestones(models.Model):
    project = models.ForeignKey(
        verbose_name='project assignment',
        to='pm_tool.ProjectData',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    year = models.ForeignKey(
        verbose_name='year',
        help_text='Jahr',
        on_delete=models.SET_NULL,
        to='pm_tool.Year',
        null=True,
        blank=True,
    )

    milestone_calendar_week = models.ForeignKey(
        verbose_name='milestone calendar week',
        help_text='Meilenstein Kalenderwocke',
        to='pm_tool.ClaendarWeek',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    milestone_value = models.ForeignKey(
        verbose_name='milestone value',
        help_text='Meilstein Inhalt',
        on_delete=models.SET_NULL,
        to='pm_tool.MilestoneDropdown',
        null=True,
        blank=True,
    )

    tendency = models.ForeignKey(
        verbose_name='tendency',
        help_text='Tendenz',
        on_delete=models.SET_NULL,
        to='pm_tool.TendenciesDropdown',
        null=True,
        blank=True,
    )

    commentary = models.ForeignKey(
        verbose_name='commentary',
        help_text='Kommentare',
        on_delete=models.SET_NULL,
        to="pm_tool.CommentaryOptions",
        null=True,
        blank=True,
    )
