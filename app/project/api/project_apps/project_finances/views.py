from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.project_finances.serializers import ProjectFinancesUpdateSerializer, \
    ProjectFinancesSerializer
from project.project_finances.models import ProjectFinances


class ProjectFinancesCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAdminOrReadOnly, IsAuthenticated]
    serializer_class = ProjectFinancesUpdateSerializer
    queryset = ProjectFinances.objects.all()


class ProjectFinancesUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly, IsAuthenticated]
    serializer_class = ProjectFinancesUpdateSerializer
    output_serializer_class = ProjectFinancesSerializer
    queryset = ProjectFinances.objects.all()
