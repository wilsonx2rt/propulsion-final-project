from django.contrib import admin

from project.pm_tool.models.project_data import RadarPortfolioDropdown, ProjectData, BusinessProposalDropdown, \
    ProjectTypeDropdown, ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, \
    ProjectCharacterDropdown, ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, \
    ProjectStatusPhaseDropdown

admin.site.register(RadarPortfolioDropdown)
admin.site.register(BusinessProposalDropdown)
admin.site.register(ProjectTypeDropdown)
admin.site.register(ProjectNatureDropdown)
admin.site.register(PoliticalSignificanceDropdown)
admin.site.register(ProjectPriorityDropdown)
admin.site.register(ProjectCharacterDropdown)
admin.site.register(ControlCycleDropdown)
admin.site.register(RiskAssessmentDropdown)
admin.site.register(ProjectHandbookDropdown)
admin.site.register(ProjectStatusPhaseDropdown)
admin.site.register(ProjectData)
