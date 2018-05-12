from collections import namedtuple

from rest_framework import viewsets
from rest_framework.response import Response

from project.api.overview.serializers import OverviewSerializer
from project.api.permissions import IsAdminOrReadOnly
from project.project_assignment.models import ProjectAssignment
from project.project_data.models import ProjectData

ProjectOverview = namedtuple('ProjectOverview', ('project_data', 'project_roles'))


class OverviewView(viewsets.ViewSet):
    permission_classes = [IsAdminOrReadOnly, ]

    def list(self, request):
        project_overview = ProjectOverview(
            project_data=ProjectData.objects.all(),
            project_roles=ProjectAssignment.objects.all(),
        )
        serializer = OverviewSerializer(project_overview)
        return Response(serializer.data)
