from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_apps.project_development.serializers import ProjectDevelopmentUpdateSerializer, \
    ProjectDevelopmentSerializer
from project.project_development.models import ProjectDevelopment


class ProjectDevelopmentCreateView(CreateAPIView):
    '''
        Creates new object. Requires the field project: projectID in the body of the request
        '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDevelopmentUpdateSerializer
    queryset = ProjectDevelopment.objects.all()


class ProjectDevelopmentUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDevelopmentUpdateSerializer
    output_serializer_class = ProjectDevelopmentSerializer
    queryset = ProjectDevelopment.objects.all()
