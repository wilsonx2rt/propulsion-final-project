from django.urls import path

from project.api.project_details.views import ProjectGetUpdateDeleteView, ProjectListCreateView

app_name = 'project_details'

urlpatterns = [
    path(
        route='',
        view=ProjectListCreateView.as_view(),
        name='project_list_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectGetUpdateDeleteView.as_view(),
        name='project_get_update_delete'
    ),
]
