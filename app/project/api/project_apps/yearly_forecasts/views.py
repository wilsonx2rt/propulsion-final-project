from rest_framework.exceptions import ValidationError
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.project_apps.pagination import SmallResultsSetPagination
from project.api.project_apps.yearly_forecasts.serializers import YearlyForecastUpdateSerializer, \
    YearlyForecastSerializer
from project.project_finances.models import YearlyForecast, ProjectFinances


class YearlyForecastCreateView(CreateAPIView):
    '''
    Creates new object
    '''
    permission_classes = [IsAuthenticated]
    serializer_class = YearlyForecastUpdateSerializer
    queryset = YearlyForecast.objects.all()


class YearlyForecastUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = YearlyForecastUpdateSerializer
    output_serializer_class = YearlyForecastSerializer
    queryset = YearlyForecast.objects.all()


class YearlyForecastGetView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = YearlyForecastSerializer
    queryset = YearlyForecast.objects.all()
    pagination_class = SmallResultsSetPagination

    def get_project_finance(self, pk):
        try:
            return ProjectFinances.objects.get(pk=pk)
        except ProjectFinances.DoesNotExist:
            raise ValidationError(f'Project finances with id {pk} does not exist')

    def filter_queryset(self, queryset):
        pk = self.kwargs.get('pk')
        project_finance = self.get_project_finance(pk)
        return queryset.filter(project_finance=project_finance)
