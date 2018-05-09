from django.contrib import admin

from project.project_finances.models import FinancingDropdown, RequirementsAssessmentDropdown, ProjectFinances

admin.site.register(FinancingDropdown)
admin.site.register(RequirementsAssessmentDropdown)
admin.site.register(ProjectFinances)
