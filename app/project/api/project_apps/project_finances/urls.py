from django.urls import path

from project.api.project_apps.project_finances.views import ProjectFinancesCreateView, \
    ProjectFinancesUpdateDeleteView

app_name = 'project_finances'

urlpatterns = [
    path(
        route='new/',
        view=ProjectFinancesCreateView.as_view(),
        name='project_finances_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectFinancesUpdateDeleteView.as_view(),
        name='project_finances_update_delete'
    ),
]
