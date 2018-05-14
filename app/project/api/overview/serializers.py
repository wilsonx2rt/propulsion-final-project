from project.api.project_apps.project_assignment.serializers import ProjectAssignmentSerializer
from project.api.project_apps.project_data.serializers import ProjectDataSerializer


class ProjectOverviewSerializer(ProjectDataSerializer):
    project_assignment = ProjectAssignmentSerializer(read_only=True, many=True)
