from django.urls import path

from project.api.project_details.views import ProjectGetView, ProjectListView

app_name = 'project_details'

urlpatterns = [
    path(
        route='',
        view=ProjectListView.as_view(),
        name='project_list_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectGetView.as_view(),
        name='project_get'
    ),

]
