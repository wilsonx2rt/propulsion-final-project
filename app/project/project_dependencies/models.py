from django.db import models


class ProjectDependencies(models.Model):
    project = models.ForeignKey(
        verbose_name='project name',
        to='project_data.ProjectData',
        related_name='project_dependencies',
        on_delete=models.SET_NULL,
        null=True,
    )

    content_dependencies = models.TextField(
        verbose_name='content dependencies',
        help_text='Abhängigkeiten Inhaltlich',
        null=True,
        blank=True,
    )

    time_dependencies = models.TextField(
        verbose_name='time dependencies',
        help_text='Abhängigkeiten Zeitlich',
        null=True,
        blank=True,
    )

    capacity_dependencies = models.TextField(
        verbose_name='capacity dependencies',
        help_text='Abhängigkeiten Kapazitativ',
        null=True,
        blank=True,
    )

    def __str__(self):
        return f'{self.project}'

    class Meta:
        verbose_name = 'Project dependencies',
        verbose_name_plural = 'Project dependencies',

