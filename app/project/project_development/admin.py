from django.contrib import admin

from project.project_development.models import ProjectDevelopment, ProjectTendencyDropdown, ProjectStatusDropdown

admin.site.register(ProjectDevelopment)
admin.site.register(ProjectTendencyDropdown)
admin.site.register(ProjectStatusDropdown)
