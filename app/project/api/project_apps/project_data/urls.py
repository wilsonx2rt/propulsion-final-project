from django.urls import path

from project.api.project_apps.project_data.views import ProjectDataCreateView, ProjectDataUpdateDeleteView

app_name = 'project_data'

urlpatterns = [
    path(
        route='new/',
        view=ProjectDataCreateView.as_view(),
        name='project_data_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectDataUpdateDeleteView.as_view(),
        name='project_data_update_delete'
    ),
]
