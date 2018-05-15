from rest_framework.generics import CreateAPIView,  RetrieveUpdateDestroyAPIView

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_assignment.serializers import ProjectAssignmentUpdateSerializer, \
    ProjectAssignmentSerializer
from project.project_assignment.models import ProjectAssignment


class ProjectAssignmentCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectAssignmentUpdateSerializer
    queryset = ProjectAssignment.objects.all()


class ProjectAssignmentUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectAssignmentUpdateSerializer
    output_serializer_class = ProjectAssignmentSerializer
    queryset = ProjectAssignment.objects.all()
