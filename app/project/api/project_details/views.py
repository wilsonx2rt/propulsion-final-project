from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_details.serializers import ProjectDetailsSerializer
from project.project_data.models import ProjectData


class ProjectListView(ListAPIView):
    '''
    Delivers a list of all projects with all it's fields
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDetailsSerializer
    queryset = ProjectData.objects.all()


class ProjectGetView(RetrieveUpdateDestroyAPIView):
    '''
    Delivers all fields of a project related to the provided id
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectDetailsSerializer
    queryset = ProjectData.objects.all()
