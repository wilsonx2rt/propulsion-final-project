from django.db import models


# TODO: CHeck if these fields are not repeated!!!
class ProjectStatusDropdown(models.Model):
    value = models.CharField(
        verbose_name='status value',
        max_length=20,
    )


class ProjectTendencyDropdown(models.Model):
    value = models.CharField(
        verbose_name='tendency value',
        max_length=20,
    )


class ProjectDevelopment(models.Model):
    project_status = models.ForeignKey(
        verbose_name='project status',
        to='project_development.ProjectStatusDropdown',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    project_tendency = models.ForeignKey(
        verbose_name='project tendency',
        to='project_development.ProjectTendencyDropdown',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
