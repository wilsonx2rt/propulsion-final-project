from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError

from project.api.project_apps.pagination import SmallResultsSetPagination
from project.api.project_apps.project_dependencies.serializers import ProjectDependenciesSerializer
from project.project_data.models import ProjectData
from project.project_dependencies.models import ProjectDependencies


class ProjectDependenciesGetView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDependenciesSerializer
    queryset = ProjectDependencies.objects.all()
    pagination_class = SmallResultsSetPagination

    def get_project(self, pk):
        try:
            return ProjectData.objects.get(pk=pk)
        except ProjectData.DoesNotExist:
            raise ValidationError(f'Project with id {pk} does not exist')

    def filter_queryset(self, queryset):
        pk = self.kwargs.get('pk')
        project = self.get_project(pk)
        return queryset.filter(project=project)


class ProjectDependenciesCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request.
    It is possible to create multiple objects per project.
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDependenciesSerializer
    queryset = ProjectDependencies.objects.all()


class ProjectDependenciesUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDependenciesSerializer
    queryset = ProjectDependencies.objects.all()
