from rest_framework.exceptions import ValidationError
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.pagination import SmallResultsSetPagination
from project.api.project_apps.project_allocation.serilaizers import ProjectAllocationUpdateSerializer, \
    ProjectAllocationSerializer
from project.project_allocation.models import ProjectAllocation
from project.project_data.models import ProjectData


class ProjectAllocationGetView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectAllocationSerializer
    queryset = ProjectAllocation.objects.all()
    pagination_class = SmallResultsSetPagination

    def get_project(self, pk):
        try:
            return ProjectData.objects.get(pk=pk)
        except ProjectData.DoesNotExist:
            raise ValidationError(f'Project finances with id {pk} does not exist')

    def filter_queryset(self, queryset):
        pk = self.kwargs.get('pk')
        project = self.get_project(pk)
        return queryset.filter(project=project)


class ProjectAllocationCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly, IsAuthenticated]
    serializer_class = ProjectAllocationUpdateSerializer
    queryset = ProjectAllocation.objects.all()


class ProjectAllocationUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly, IsAuthenticated]
    serializer_class = ProjectAllocationUpdateSerializer
    output_serializer_class = ProjectAllocationSerializer
    queryset = ProjectAllocation.objects.all()
