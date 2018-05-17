from project.api.project_apps.project_allocation.serilaizers import ProjectAllocationSerializer
from project.api.project_apps.project_assignment.serializers import ProjectAssignmentSerializer
from project.api.project_apps.project_data.serializers import ProjectDataSerializer
from project.api.project_apps.project_dependencies.serializers import ProjectDependenciesSerializer
from project.api.project_apps.project_development.serializers import ProjectDevelopmentSerializer
from project.api.project_apps.project_finances.serializers import ProjectFinancesSerializer
from project.api.project_apps.project_milestones.serializers import ProjectMilestonesSerializer


class ProjectDetailsSerializer(ProjectDataSerializer):
    project_assignment = ProjectAssignmentSerializer(read_only=True)
    project_finances = ProjectFinancesSerializer(read_only=True)
    project_allocations = ProjectAllocationSerializer(read_only=True, many=True)
    # project_milestones = ProjectMilestonesSerializer(read_only=True, many=True)
    project_development = ProjectDevelopmentSerializer(read_only=True)
    project_dependencies = ProjectDependenciesSerializer(read_only=True, many=True)
