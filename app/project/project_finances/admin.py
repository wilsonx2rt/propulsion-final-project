from django.contrib import admin

from project.project_finances.models import FinancingDropdown, RequirementsAssessmentDropdown, ProjectFinances, \
    CreditStatusDropdown, YearlyForecast

admin.site.register(FinancingDropdown)
admin.site.register(RequirementsAssessmentDropdown)
admin.site.register(ProjectFinances)
admin.site.register(CreditStatusDropdown)
admin.site.register(YearlyForecast)
