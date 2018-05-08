from django.contrib import admin

from project.pm_tool.models import LeadingRoleDropdown, LeadingTeamDropdown, ProjectResponsibilityDropdown, \
    OverallPMTeamDropdown, PMDropdown, PlannerControlDropdown, ProjectAssignment, CommunicationsDropdown, \
    IlustratorDropdown, ConstructionManagementDropdown, ProjectDevelopment, ProjectTendencyDropdown, \
    ProjectStatusDropdown
from project.pm_tool.models.project_dependencies import ProjectDependencies
from project.pm_tool.models.project_milestones import ClaendarWeek, MilestoneDropdown, TendenciesDropdown,\
    CommentaryOptions, Milestones
from project.pm_tool.models.project_allocation import ProjectAllocation, Year, QuarterlyDetails
from project.pm_tool.models.project_data import RadarPortfolioDropdown, ProjectData, BusinessProposalDropdown, \
    ProjectTypeDropdown, ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, \
    ProjectCharacterDropdown, ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, \
    ProjectStatusPhaseDropdown
from project.pm_tool.models.project_finances import FinancingDropdown, RequirementsAssessmentDropdown, ProjectFinances

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

# Project finances
admin.site.register(FinancingDropdown)
admin.site.register(RequirementsAssessmentDropdown)
admin.site.register(ProjectFinances)

# Project allocation
admin.site.register(ProjectAllocation)
admin.site.register(Year)
admin.site.register(QuarterlyDetails)

# Project milestones
admin.site.register(ClaendarWeek)
admin.site.register(MilestoneDropdown)
admin.site.register(TendenciesDropdown)
admin.site.register(CommentaryOptions)
admin.site.register(Milestones)

# Project dependencies
admin.site.register(ProjectDependencies)

# Project development
admin.site.register(ProjectDevelopment)
admin.site.register(ProjectTendencyDropdown)
admin.site.register(ProjectStatusDropdown)
