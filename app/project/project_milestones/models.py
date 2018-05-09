from django.db import models


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
        to='project_data.ProjectData',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    year = models.ForeignKey(
        verbose_name='year',
        help_text='Jahr',
        on_delete=models.SET_NULL,
        to='helper_models.Year',
        null=True,
        blank=True,
    )

    milestone_calendar_week = models.ForeignKey(
        verbose_name='milestone calendar week',
        help_text='Meilenstein Kalenderwocke',
        to='helper_models.CalendarWeek',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    milestone_value = models.ForeignKey(
        verbose_name='milestone value',
        help_text='Meilstein Inhalt',
        on_delete=models.SET_NULL,
        to='project_milestones.MilestoneDropdown',
        null=True,
        blank=True,
    )

    tendency = models.ForeignKey(
        verbose_name='tendency',
        help_text='Tendenz',
        on_delete=models.SET_NULL,
        to='project_milestones.TendenciesDropdown',
        null=True,
        blank=True,
    )

    commentary = models.ForeignKey(
        verbose_name='commentary',
        help_text='Kommentare',
        on_delete=models.SET_NULL,
        to="project_milestones.CommentaryOptions",
        null=True,
        blank=True,
    )
