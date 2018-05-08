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


class PMDropdown(models.Model):
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


class IlustratorDropdown(models.Model):
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
    project = models.ForeignKey(
        verbose_name='project assignment',
        to='pm_tool.ProjectData',
        on_delete='models.SET_NULL',
    )

    leading_role = models.ForeignKey(
        verbose_name='leading role',
        help_text='Federführende Stelle',
        on_delete=models.SET_NULL,
        to='pm_tool.LeadingRoleDropdown',
        blank=True,
        null=True,
    )

    leading_team = models.ForeignKey(
        verbose_name='leading team',
        help_text='Federführende Fachgruppe',
        on_delete=models.SET_NULL,
        to='pm_tool.LeadingTeamDropdown',
        blank=True,
        null=True,
    )

    project_responsibility = models.ForeignKey(
        verbose_name='project responsibility',
        help_text='Projektverantwortung',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectResponsibilityDropdown',
        blank=True,
        null=True,
    )

    overall_pm_team = models.ForeignKey(
        verbose_name='overall pm team',
        help_text='Gesamtprojektleitung (Koordinationsteam)',
        on_delete=models.SET_NULL,
        to='pm_tool.OverallPMTeamDropdown',
        blank=True,
        null=True,
    )

    project_management = models.ForeignKey(
        verbose_name='project management',
        help_text='Projektleitung',
        on_delete=models.SET_NULL,
        to='pm_tool.PMDropdown',
        blank=True,
        null=True,
    )

    planner_control = models.ForeignKey(
        verbose_name='planner control',
        help_text='Planerleistung',
        on_delete=models.SET_NULL,
        to='pm_tool.PlannerControlDropdown',
        blank=True,
        null=True,
    )

    construction_management = models.ForeignKey(
        verbose_name='construction management',
        help_text='Bauleitung (Baubegleitung)',
        on_delete=models.SET_NULL,
        to='pm_tool.ConstructionManagementDropdown',
        blank=True,
        null=True,
    )

    ilustrator = models.ForeignKey(
        verbose_name='ilustrator',
        help_text='ZeichnerIn',
        on_delete=models.SET_NULL,
        to='pm_tool.IlustratorDropdown',
        blank=True,
        null=True,
    )

    communications = models.ForeignKey(
        verbose_name='communications',
        help_text='Kommunikation',
        on_delete=models.SET_NULL,
        to='pm_tool.CommunicationsDropdown',
        blank=True,
        null=True,
    )
