from django.db import models


# TODO: CHeck if these fields are not repeated!!!
class ProjectStatusDropdown(models.Model):
    name = models.CharField(
        verbose_name='status value',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectTendencyDropdown(models.Model):
    name = models.CharField(
        verbose_name='tendency value',
        max_length=20,
        null=True,
    )

    def __str__(self):
        return self.name


'''
Main
'''


class ProjectDevelopment(models.Model):
    project = models.OneToOneField(
        verbose_name='project name',
        to='project_data.ProjectData',
        related_name='project_development',
        on_delete=models.SET_NULL,
        null=True,
    )

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

    def __str__(self):
        return f'{self.project}'
