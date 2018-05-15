from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.non_admin.project_data.serializer import NonAProjectDataUpdateSerializer
from project.project_data.models import ProjectData


class NonAProjectDataUpdateView(RetrieveUpdateAPIView):
    '''
    Serves fields allowed for non admin user
    Read only field ('name', 'project_type', 'project_priority', 'control_cycle', 'e3_number')
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = NonAProjectDataUpdateSerializer
    queryset = ProjectData.objects.all()
