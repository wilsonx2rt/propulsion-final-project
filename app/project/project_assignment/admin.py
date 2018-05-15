from django.contrib import admin

from project.project_assignment.models import LeadingRoleDropdown, LeadingTeamDropdown, ProjectResponsibilityDropdown, \
    OverallPMTeamDropdown, PlannerControlDropdown, ConstructionManagementDropdown, \
    CommunicationsDropdown, ProjectAssignment, IllustratorDropdown

admin.site.register(LeadingRoleDropdown)
admin.site.register(LeadingTeamDropdown)
admin.site.register(ProjectResponsibilityDropdown)
admin.site.register(OverallPMTeamDropdown)
admin.site.register(PlannerControlDropdown)
admin.site.register(ConstructionManagementDropdown)
admin.site.register(IllustratorDropdown)
admin.site.register(CommunicationsDropdown)
admin.site.register(ProjectAssignment)
