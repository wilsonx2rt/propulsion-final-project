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
        on_delete=models.SET_NULL,
        to='pm_tool.LeadingRoleDropdown',
        blank=True,
        null=True,
    )

    leading_team = models.ForeignKey(
        verbose_name='leading team',
        on_delete=models.SET_NULL,
        to='pm_tool.LeadingTeamDropdown',
        blank=True,
        null=True,
    )

    project_responsibility = models.ForeignKey(
        verbose_name='project responsibility',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectResponsibilityDropdown',
        blank=True,
        null=True,
    )

    overall_pm_team = models.ForeignKey(
        verbose_name='overall pm team',
        on_delete=models.SET_NULL,
        to='pm_tool.OverallPMTeamDropdown',
        blank=True,
        null=True,
    )

    project_management = models.ForeignKey(
        verbose_name='project management',
        on_delete=models.SET_NULL,
        to='pm_tool.PMDropdown',
        blank=True,
        null=True,
    )
