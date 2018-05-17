from django.urls import path

from project.api.project_apps.yearly_forecasts.views import YearlyForecastCreateView, YearlyForecastUpdateDeleteView

app_name = 'yearly_forecasts'

urlpatterns = [
    path(
        route='new/',
        view=YearlyForecastCreateView.as_view(),
        name='yearly_forecast_create'
    ),
    path(
        route='<int:pk>/',
        view=YearlyForecastUpdateDeleteView.as_view(),
        name='yearly_forecast_update_delete'
    ),
]
