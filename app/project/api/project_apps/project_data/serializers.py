from rest_framework import serializers

from project.project_data.models import ProjectData, RadarPortfolioDropdown, BusinessProposalDropdown, \
    ProjectTypeDropdown, ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, \
    ProjectCharacterDropdown, ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, \
    ProjectStatusPhaseDropdown


class RadarPortfolioDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = RadarPortfolioDropdown
        fields = '__all__'


class BusinessProposalDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessProposalDropdown
        fields = '__all__'


class ProjectTypeDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTypeDropdown
        fields = '__all__'


class ProjectNatureDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectNatureDropdown
        fields = '__all__'


class PoliticalSignificanceDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = PoliticalSignificanceDropdown
        fields = '__all__'


class ProjectPriorityDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectPriorityDropdown
        fields = '__all__'


class ProjectCharacterDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCharacterDropdown
        fields = '__all__'


class ControlCycleDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlCycleDropdown
        fields = '__all__'


class RiskAssessmentDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiskAssessmentDropdown
        fields = '__all__'


class ProjectHandbookDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectHandbookDropdown
        fields = '__all__'


class ProjectStatusPhaseDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStatusPhaseDropdown
        fields = '__all__'


class ProjectDataUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectData
        fields = '__all__'


class ProjectDataSerializer(ProjectDataUpdateSerializer):
    radar_portfolio = RadarPortfolioDropdownSerializer(read_only=True)
    business_proposal = BusinessProposalDropdownSerializer(read_only=True)
    project_type = ProjectTypeDropdownSerializer(read_only=True)
    project_nature = ProjectNatureDropdownSerializer(read_only=True)
    political_significance = PoliticalSignificanceDropdownSerializer(read_only=True)
    project_priority = ProjectPriorityDropdownSerializer(read_only=True)
    project_character = ProjectCharacterDropdownSerializer(read_only=True)
    control_cycle = ControlCycleDropdownSerializer(read_only=True)
    risk_assessment = RiskAssessmentDropdownSerializer(read_only=True)
    project_handbook = ProjectHandbookDropdownSerializer(read_only=True)
    project_status_phase = ProjectStatusPhaseDropdownSerializer(read_only=True)
