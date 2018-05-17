import datetime

from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.db.models import Q
from rest_framework.exceptions import ValidationError
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.api.project_apps.project_milestones.serializers import ProjectMilestonesSerializer, \
    ProjectMilestonesUpdateSerializer
from project.project_data.models import ProjectData
from project.project_milestones.models import Milestones


class SmallResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProjectMilestonesGetView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectMilestonesSerializer
    now = datetime.datetime.now()
    year = int(now.strftime("%Y"))
    month = int(now.strftime("%m"))
    day = int(now.strftime("%d"))
    # Find current week - 4 to offset the pagination - show milestones starting from a month ago
    week = int(datetime.date(year, month, day).strftime("%V")) - 4
    queryset = Milestones.objects.filter(Q(year=1)&Q(milestone_calendar_week__gte=week)|Q(year__gt=1))
    pagination_class = SmallResultsSetPagination

    def get_project(self, pk):
        try:
            return ProjectData.objects.get(pk=pk)
        except ProjectData.DoesNotExist:
            raise ValidationError(f'Project with id {pk} does not exist')

    def filter_queryset(self, queryset):
        pk = self.kwargs.get('pk')
        project = self.get_project(pk)
        return queryset.filter(project=project)


class ProjectMilestonesCreateView(CreateAPIView):
    '''
    Creates new object. Requires the field project: projectID in the body of the request
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectMilestonesUpdateSerializer
    queryset = Milestones.objects.all()


class ProjectMilestonesUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectMilestonesUpdateSerializer
    output_serializer_class = ProjectMilestonesSerializer
    queryset = Milestones.objects.all()
