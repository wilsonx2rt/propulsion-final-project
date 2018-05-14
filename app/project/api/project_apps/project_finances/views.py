from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.response import Response

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_finances.serializers import ProjectFinancesUpdateSerializer, \
    ProjectFinancesSerializer
from project.project_finances.models import ProjectFinances


class ProjectFinancesCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectFinancesUpdateSerializer
    queryset = ProjectFinances.objects.all()


class ProjectFinancesUpdateView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectFinancesUpdateSerializer
    output_serializer_class = ProjectFinancesSerializer
    queryset = ProjectFinances.objects.all()

    def post(self, request, **kwargs):
        project = self.get_object()
        serializer = self.get_serializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        project = serializer.save()
        return Response(self.output_serializer_class(project).data)
