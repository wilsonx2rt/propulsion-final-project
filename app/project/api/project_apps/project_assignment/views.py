from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response

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


class ProjectAssignmentUpdateView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectAssignmentUpdateSerializer
    output_serializer_class = ProjectAssignmentSerializer
    queryset = ProjectAssignment.objects.all()

    def post(self, request, **kwargs):
        project = self.get_object()
        serializer = self.get_serializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        project = serializer.save()
        return Response(self.output_serializer_class(project).data)
