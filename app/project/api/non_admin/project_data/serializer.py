from rest_framework import serializers

from project.project_data.models import ProjectData


class NonAProjectDataUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectData
        fields = ['name', 'project_type', 'project_priority', 'control_cycle', 'e3_number', 'project_goal']
        read_only_fields = ['name', 'project_type', 'project_priority', 'control_cycle', 'e3_number']
