from rest_framework import serializers

from project.api.project_apps.project_data.serializers import ProjectDataSerializer
from project.project_assignment.models import ProjectAssignment, LeadingRoleDropdown, LeadingTeamDropdown, \
    ProjectResponsibilityDropdown, OverallPMTeamDropdown, PMDropdown, PlannerControlDropdown, \
    ConstructionManagementDropdown, IllustratorDropdown, CommunicationsDropdown


class LeadingRoleDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadingRoleDropdown
        fields = '__all__'


class LeadingTeamDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadingTeamDropdown
        fields = '__all__'


class ProjectResponsibilityDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectResponsibilityDropdown
        fields = '__all__'


class OverallPmTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = OverallPMTeamDropdown
        fields = '__all__'


class PMDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = PMDropdown
        fields = '__all__'


class PlannerControlDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannerControlDropdown
        fields = '__all__'


class ConstructionManagementDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConstructionManagementDropdown
        fields = '__all__'


class IllustratorDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = IllustratorDropdown
        fields = '__all__'


class CommunicationsDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationsDropdown
        fields = '__all__'


class ProjectAssignmentSerializer(serializers.ModelSerializer):
    leading_role = LeadingRoleDropdownSerializer()
    leading_team = LeadingRoleDropdownSerializer()
    project_responsibility = ProjectResponsibilityDropdownSerializer()
    overall_pm_team = OverallPmTeamSerializer()
    project_management = PMDropdownSerializer()
    planner_control = PlannerControlDropdownSerializer()
    construction_management = ConstructionManagementDropdownSerializer()
    illustrator = IllustratorDropdownSerializer()
    communications = CommunicationsDropdownSerializer()

    class Meta:
        model = ProjectAssignment
        fields = '__all__'