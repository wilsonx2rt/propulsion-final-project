from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView

from project.api.overview.serializers import ProjectOverviewSerializer
from project.api.permissions import IsAdminOrReadOnly
from project.project_data.models import ProjectData
from project.user.serializers import UserSerializer

User = get_user_model()


# TODO: IMPLEMENT SEARCH FUNCTIONALITY
class ProjectOverviewView(ListAPIView):
    '''
    Optional filter by name, project type, project manager, project status
    '''
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = ProjectOverviewSerializer
    queryset = ProjectData.objects.all()

    def filter_queryset(self, queryset):
        filter_string = self.request.query_params.get('filter')
        if filter_string:
            queryset = queryset.filter(
                Q(name__icontains=filter_string) |
                Q(project_type__name__icontains=filter_string) |
                Q(project_status_phase__name__icontains=filter_string) |
                Q(project_assignment__project_management__name__icontains=filter_string)
            )
        return queryset


class ProjectManagersOverviewView(ListAPIView):
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = UserSerializer
    queryset = User.objects.all()
