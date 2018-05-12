from rest_framework import serializers

from project.project_assignment.models import ProjectAssignment
from project.project_data.models import ProjectData


class ProjectInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectData
        fields = ['id', 'name', 'project_status_phase']


class ProjectManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectAssignment
        fields = ['project_management']


class OverviewSerializer(serializers.Serializer):
    project_info = ProjectInfoSerializer(many=True)
    project_manager = ProjectManagerSerializer(many=True)
