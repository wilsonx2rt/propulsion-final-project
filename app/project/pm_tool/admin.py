from django.contrib import admin

from project.pm_tool.models import LeadingRoleDropdown, LeadingTeamDropdown, ProjectResponsibilityDropdown, \
    OverallPMTeamDropdown, PMDropdown, PlannerControlDropdown, ProjectAssignment, CommunicationsDropdown, \
    IlustratorDropdown, ConstructionManagementDropdown
from project.pm_tool.models.project_data import RadarPortfolioDropdown, ProjectData, BusinessProposalDropdown, \
    ProjectTypeDropdown, ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, \
    ProjectCharacterDropdown, ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, \
    ProjectStatusPhaseDropdown

# Project Data
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

# Project assignment
admin.site.register(LeadingRoleDropdown)
admin.site.register(LeadingTeamDropdown)
admin.site.register(ProjectResponsibilityDropdown)
admin.site.register(OverallPMTeamDropdown)
admin.site.register(PMDropdown)
admin.site.register(PlannerControlDropdown)
admin.site.register(ConstructionManagementDropdown)
admin.site.register(IlustratorDropdown)
admin.site.register(CommunicationsDropdown)
admin.site.register(ProjectAssignment)
