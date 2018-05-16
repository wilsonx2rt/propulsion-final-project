from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.non_admin.project_finances.serializers import NonAProjectFinancesUpdateSerializer
from project.project_finances.models import ProjectFinances


class NonAProjectFinancesUpdateView(RetrieveAPIView):
    '''
    Serves fields allowed for non admin user
    Read only field ('name', 'project_type', 'project_priority', 'control_cycle', 'e3_number')
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = NonAProjectFinancesUpdateSerializer
    queryset = ProjectFinances.objects.all()
