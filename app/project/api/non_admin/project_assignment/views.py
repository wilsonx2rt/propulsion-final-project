from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_apps.project_assignment.serializers import ProjectAssignmentSerializer
from project.project_assignment.models import ProjectAssignment


class NonAProjectAssignmentView(RetrieveAPIView):
    '''
    Serves all project assignment fields
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectAssignmentSerializer
    queryset = ProjectAssignment.objects.all()
