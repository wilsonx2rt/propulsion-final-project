from django.contrib import admin

from project.project_allocation.models import ProjectAllocation, QuarterlyDetails

admin.site.register(ProjectAllocation)
admin.site.register(QuarterlyDetails)
