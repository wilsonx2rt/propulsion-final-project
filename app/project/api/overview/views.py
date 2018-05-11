from rest_framework.generics import ListAPIView

from project.api.permissions import IsAdminOrReadOnly
from project.api.projects.project_data.serializers import ProjectDataSerializer
from project.project_data.models import ProjectData


class OverviewView(ListAPIView):
    queryset = ProjectData.objects.all()
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = ProjectDataSerializer
