from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_data.serializers import ProjectDataUpdateSerializer, ProjectDataSerializer
from project.project_data.models import ProjectData


class ProjectDataCreateView(CreateAPIView):
    '''
    Creates new object
    '''
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectDataUpdateSerializer
    queryset = ProjectData.objects.all()


class ProjectDataUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectDataUpdateSerializer
    output_serializer_class = ProjectDataSerializer
    queryset = ProjectData.objects.all()
