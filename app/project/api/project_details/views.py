from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.response import Response

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_details.serializers import ProjectDetailsSerializer, ProjectCreateSerializer
from project.project_allocation.models import ProjectAllocation
from project.project_assignment.models import ProjectAssignment
from project.project_data.models import ProjectData
from project.project_dependencies.models import ProjectDependencies
from project.project_development.models import ProjectDevelopment
from project.project_finances.models import ProjectFinances
from project.project_milestones.models import Milestones


class ProjectCreateView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectCreateSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        ProjectData.objects.create(name=serializer.validated_data.get('project_name'))
        ProjectAssignment.objects.create()
        ProjectFinances.objects.create()
        ProjectAllocation.objects.create()
        ProjectDevelopment.objects.create()
        ProjectDependencies.objects.create()
        Milestones.objects.create()
        print(serializer.validated_data)
        return Response('ok')


class ProjectGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectDetailsSerializer
    queryset = ProjectData.objects.all()


class ProjectListCreateView(ListCreateAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ProjectDetailsSerializer
    queryset = ProjectData.objects.all()
