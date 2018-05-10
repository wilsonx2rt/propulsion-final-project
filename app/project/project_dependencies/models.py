from django.db import models


# TODO: Multiple entries per project should be possible !!!
# TODO: ask if it's enough if they can be edited/extended through out the duration of the project
class ProjectDependencies(models.Model):
    project = models.ForeignKey(
        verbose_name='project name',
        to='project_data.ProjectData',
        on_delete='models.SET_NULL',
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
        return self.project.name
