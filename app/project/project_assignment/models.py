from django.conf import settings
from django.db import models


class LeadingRoleDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class LeadingTeamDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class ProjectResponsibilityDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class OverallPMTeamDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class PlannerControlDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class ConstructionManagementDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class IllustratorDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


class CommunicationsDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=20,
    )

    def __str__(self):
        return self.name


"""
Main
"""


class ProjectAssignment(models.Model):
    project = models.OneToOneField(
        verbose_name='project name',
        to='project_data.ProjectData',
        related_name='project_assignment',
        on_delete=models.SET_NULL,
        null=True,
    )

    leading_role = models.ForeignKey(
        verbose_name='leading role',
        help_text='Federführende Stelle',
        on_delete=models.SET_NULL,
        to='project_assignment.LeadingRoleDropdown',
        blank=True,
        null=True,
    )

    leading_team = models.ForeignKey(
        verbose_name='leading team',
        help_text='Federführende Fachgruppe',
        on_delete=models.SET_NULL,
        to='project_assignment.LeadingTeamDropdown',
        blank=True,
        null=True,
    )

    project_responsibility = models.ForeignKey(
        verbose_name='project responsibility',
        help_text='Projektverantwortung',
        on_delete=models.SET_NULL,
        to='project_assignment.ProjectResponsibilityDropdown',
        blank=True,
        null=True,
    )

    overall_pm_team = models.ForeignKey(
        verbose_name='overall pm team',
        help_text='Gesamtprojektleitung (Koordinationsteam)',
        on_delete=models.SET_NULL,
        to='project_assignment.OverallPMTeamDropdown',
        blank=True,
        null=True,
    )

    project_management = models.ManyToManyField(
        verbose_name='project management',
        help_text='Projektleitung',
        to=settings.AUTH_USER_MODEL,
        related_name='project_assignments',
        blank=True,
    )

    planner_control = models.ForeignKey(
        verbose_name='planner control',
        help_text='Planerleistung',
        on_delete=models.SET_NULL,
        to='project_assignment.PlannerControlDropdown',
        blank=True,
        null=True,
    )

    construction_management = models.ForeignKey(
        verbose_name='construction management',
        help_text='Bauleitung (Baubegleitung)',
        on_delete=models.SET_NULL,
        to='project_assignment.ConstructionManagementDropdown',
        blank=True,
        null=True,
    )

    illustrator = models.ForeignKey(
        verbose_name='illustrator',
        help_text='ZeichnerIn',
        on_delete=models.SET_NULL,
        to='project_assignment.IllustratorDropdown',
        blank=True,
        null=True,
    )

    communications = models.ForeignKey(
        verbose_name='communications',
        help_text='Kommunikation',
        on_delete=models.SET_NULL,
        to='project_assignment.CommunicationsDropdown',
        blank=True,
        null=True,
    )

    def __str__(self):
        return f'{self.project}'
