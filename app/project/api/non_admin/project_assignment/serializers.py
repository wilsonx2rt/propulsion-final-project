from project.api.project_apps.project_assignment.serializers import ProjectAssignmentSerializer


class NonAProjectAssignmentSerializer(ProjectAssignmentSerializer):
    class Meta:
        read_only_fields = '__all__'