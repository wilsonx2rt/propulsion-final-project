from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_allocation.serilaizers import ProjectAllocationUpdateSerializer, \
    ProjectAllocationSerializer
from project.project_allocation.models import ProjectAllocation


class ProjectAllocationCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectAllocationUpdateSerializer
    queryset = ProjectAllocation.objects.all()


class ProjectAllocationUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectAllocationUpdateSerializer
    output_serializer_class = ProjectAllocationSerializer
    queryset = ProjectAllocation.objects.all()
