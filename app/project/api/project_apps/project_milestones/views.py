from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_milestones.serializers import ProjectMilestonesSerializer, \
    ProjectMilestonesUpdateSerializer
from project.project_milestones.models import Milestones


class ProjectMilestonesCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectMilestonesUpdateSerializer
    queryset = Milestones.objects.all()


class ProjectMilestonesUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectMilestonesUpdateSerializer
    output_serializer_class = ProjectMilestonesSerializer
    queryset = Milestones.objects.all()
