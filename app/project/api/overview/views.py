from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView

from project.api.overview.serializers import ProjectOverviewSerializer
from project.api.permissions import IsAdminOrReadOnly
from project.project_data.models import ProjectData
from project.user.serializers import UserSerializer

User = get_user_model()


class ProjectOverviewView(ListAPIView):
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = ProjectOverviewSerializer
    queryset = ProjectData.objects.all()


class ProjectManagersOverviewView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def filter_queryset(self, queryset):
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = queryset.filter(content__contains=search_string)
        return queryset
