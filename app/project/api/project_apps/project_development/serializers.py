from rest_framework import serializers

from project.project_development.models import ProjectDevelopment, ProjectStatusDropdown, ProjectTendencyDropdown


class ProjectStatusDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStatusDropdown
        fields = '__all__'


class ProjectTendencyDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTendencyDropdown
        fields = '__all__'


class ProjectDevelopmentSerializer(serializers.ModelSerializer):
    project_status = ProjectStatusDropdownSerializer()
    project_tendency = ProjectTendencyDropdownSerializer()

    class Meta:
        model = ProjectDevelopment
        fields = '__all__'


class ProjectDevelopmentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDevelopment
        fields = '__all__'
