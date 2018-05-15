from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_apps.project_assignment.serializers import ProjectAssignmentSerializer
from project.project_assignment.models import ProjectAssignment


class NonAProjectAssignmentUpdateDeleteView(RetrieveUpdateAPIView):
    '''
    Serves all project assignment fields
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectAssignmentSerializer
    queryset = ProjectAssignment.objects.all()
