from django.db import models

QUARTER_CHOICES = (
    ('Q1', 'Q1'),
    ('Q2', 'Q2'),
    ('Q3', 'Q3'),
    ('Q4', 'Q4')
)


class QuarterlyDetails(models.Model):
    year = models.ForeignKey(
        verbose_name='year',
        help_text='Jahr',
        on_delete=models.SET_NULL,
        to='pm_tool.Year',
    )

    quarter = models.CharField(
        verbose_name='quarter',
        help_text='Quartal',
        choices=QUARTER_CHOICES,
    )

    project_phase = models.IntegerField(
        verbose_name='project phase',
        help_text='Phase',
        blank=True,
    )

    project_responsibility = models.IntegerField(
        verbose_name='project responsibility',
        help_text='Projektverantwortung',
        blank=True,
    )

    overall_pm_team_allocation = models.IntegerField(
        verbose_name='overall pm team allocation',
        help_text='Gesamtprojektleitung',
        blank=True,
    )

    project_management_allocation = models.IntegerField(
        verbose_name='project management allocation',
        help_text='Projektleitung',
        blank=True,
    )

    planner_control_allocation = models.IntegerField(
        verbose_name='planner control allocation',
        help_text='Planerleistung',
        blank=True,
    )

    construction_management_allocation = models.IntegerField(
        verbose_name='construction management allocation',
        help_text='Bauleitung',
        blank=True,
    )

    illustrator_allocation = models.IntegerField(
        verbose_name='illustrator allocation',
        help_text='ZeichnerIn',
        blank=True,
    )

    supplementary_construction_management_allocation = models.IntegerField(
        verbose_name='supplementary construction management allocation',
        help_text='Bauleitung (Baubegleitung)',
        blank=True,
    )

    communications_allocation = models.IntegerField(
        verbose_name='communications allocation',
        help_text='Kommunikation',
        blank=True,
    )

    total_allocation = models.IntegerField(
        verbose_name='total allocation',
        help_text='Total Aufwand',
        blank=True,
    )


class Year(models.Model):
    year = models.CharField(
        verbose_name='year',
        help_text='jahr',
        max_length=4,
    )


"""
Main
"""


class ProjectAllocation(models.Model):
    project = models.ForeignKey(
        verbose_name='project assignment',
        to='pm_tool.ProjectData',
        on_delete='models.SET_NULL',
    )

    quarterly_details = models.ForeignKey(
        verbose_name='quarterly details',
        help_text='Projektablauf & Ressourcenplanung',
        on_delete=models.SET_NULL,
        to='pm_tool.QuarterlyDetails',
        blank=True,
        null=True,
    )
