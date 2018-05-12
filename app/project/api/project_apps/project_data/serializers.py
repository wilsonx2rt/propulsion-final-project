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


class ProjectDataSerializer(serializers.ModelSerializer):
    radar_portfolio = RadarPortfolioDropdownSerializer()
    business_proposal = BusinessProposalDropdownSerializer()
    project_type = ProjectTypeDropdownSerializer()
    project_nature = ProjectNatureDropdownSerializer()
    political_significance = PoliticalSignificanceDropdownSerializer()
    project_priority = ProjectPriorityDropdownSerializer()
    project_character = ProjectCharacterDropdownSerializer()
    control_cycle = ControlCycleDropdownSerializer()
    risk_assessment = RiskAssessmentDropdownSerializer()
    project_handbook = ProjectHandbookDropdownSerializer()
    project_status_phase = ProjectStatusPhaseDropdownSerializer()

    class Meta:
        model = ProjectData
        fields = '__all__'
