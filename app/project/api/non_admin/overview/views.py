from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.overview.serializers import ProjectOverviewSerializer
from project.project_data.models import ProjectData

User = get_user_model()


class NonAProjectOverviewView(ListAPIView):
    """
    Serves a list of all projects assigned to the current user. Filter is made by user ID
    """
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectOverviewSerializer
    queryset = ProjectData.objects.all()

    def filter_queryset(self, queryset):
        user = self.request.user.id
        print(user)
        if user:
            queryset = queryset.filter(
                project_assignment__project_management__id=user
            )
        return queryset
