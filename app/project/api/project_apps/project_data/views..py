from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_data.serializers import ProjectDataUpdateSerializer, ProjectDataSerializer
from project.project_data.models import ProjectData


class ProjectDataUpdateView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectDataUpdateSerializer
    output_serializer_class = ProjectDataSerializer
    queryset = ProjectData.objects.all()

    def post(self, request, **kwargs):
        project = self.get_object()
        serializer = self.get_serializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        project = serializer.save()
        return Response(self.output_serializer_class(project).data)
