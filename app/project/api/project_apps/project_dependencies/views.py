from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_apps.project_dependencies.serializers import ProjectDependenciesSerializer
from project.project_dependencies.models import ProjectDependencies


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
