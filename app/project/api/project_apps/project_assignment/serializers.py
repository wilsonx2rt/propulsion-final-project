from rest_framework import serializers

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


class OverallPMTeamDropdownSerializer(serializers.ModelSerializer):
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
    leading_team = LeadingTeamDropdownSerializer()
    project_responsibility = ProjectResponsibilityDropdownSerializer()
    overall_pm_team = OverallPMTeamDropdownSerializer()
    project_management = PMDropdownSerializer()
    planner_control = PlannerControlDropdownSerializer()
    construction_management = ConstructionManagementDropdownSerializer()
    illustrator = IllustratorDropdownSerializer()
    communications = CommunicationsDropdownSerializer()

    class Meta:
        model = ProjectAssignment
        fields = '__all__'


class ProjectAssignmentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectAssignment
        fields = '__all__'
        read_only_fields = ['project']
