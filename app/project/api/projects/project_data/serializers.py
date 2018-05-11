from rest_framework import serializers

from project.project_data.models import ProjectData, RadarPortfolioDropdown, BusinessProposalDropdown, \
    ProjectTypeDropdown, ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown


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


class ProjectDataSerializer(serializers.ModelSerializer):
    radar_portfolio = RadarPortfolioDropdownSerializer()
    business_proposal = BusinessProposalDropdownSerializer()
    project_type = ProjectTypeDropdownSerializer()
    # not working
    project_nature = ProjectNatureDropdown()
    political_significance = PoliticalSignificanceDropdown()
    project_priority = ProjectPriorityDropdown()

    class Meta:
        model = ProjectData
        fields = '__all__'
