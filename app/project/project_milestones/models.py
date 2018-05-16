from django.db import models


class MilestoneDropdown(models.Model):
    name = models.CharField(
        verbose_name='milestone dropdown value',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class TendenciesDropdown(models.Model):
    name = models.CharField(
        verbose_name='tendencies dropdown value',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


"""
Main
"""


class Milestones(models.Model):
    project = models.ForeignKey(
        verbose_name='project name',
        to='project_data.ProjectData',
        related_name='project_milestones',
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

    def __str__(self):
        str = f'{self.project}/{self.year}/{self.milestone_calendar_week}'
        return str

    class Meta:
        verbose_name = 'Milestone'
        verbose_name_plural = "Milestones"
        unique_together = [(
            'project',
            'year',
            'milestone_calendar_week',
        )]
