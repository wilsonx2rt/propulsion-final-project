from django.urls import path

from project.api.project_apps.project_finances.views import ProjectFinancesCreateView, ProjectFinancesUpdateView

app_name = 'project_finances'

urlpatterns = [
    path(
        route='new/',
        view=ProjectFinancesCreateView.as_view(),
        name='project_finances_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectFinancesUpdateView.as_view(),
        name='project_finances_update'
    ),
]
