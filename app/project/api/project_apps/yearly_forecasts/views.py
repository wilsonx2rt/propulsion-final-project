from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.yearly_forecasts.serializers import YearlyForecastUpdateSerializer, \
    YearlyForecastSerializer
from project.project_finances.models import YearlyForecast


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
