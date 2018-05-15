from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView

from project.api.overview.serializers import ProjectOverviewSerializer
from project.api.permissions import IsAdminOrReadOnly
from project.project_data.models import ProjectData
from project.user.serializers import UserSerializer

User = get_user_model()


# TODO: IMPLEMENT SEARCH FUNCTIONALITY
class ProjectOverviewView(ListAPIView):
    '''
    Optional filter by name,
    '''
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = ProjectOverviewSerializer
    queryset = ProjectData.objects.all()


class ProjectManagersOverviewView(ListAPIView):
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = UserSerializer
    queryset = User.objects.all()
