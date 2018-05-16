from django.urls import path

from project.api.project_details.views import ProjectListView, ProjectGetView

app_name = 'project_details'

urlpatterns = [
    path(
        route='',
        view=ProjectListView.as_view(),
        name='project_list_all_fields'
    ),
    path(
        route='<int:pk>/',
        view=ProjectGetView.as_view(),
        name='project_get_by_id'
    ),
]
