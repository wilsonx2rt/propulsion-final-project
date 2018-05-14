from django.urls import path

from project.api.project_details.views import ProjectGetView, ProjectListCreateView

app_name = 'project_details'

urlpatterns = [
    path(
        route='',
        view=ProjectListCreateView.as_view(),
        name='project_list_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectGetView.as_view(),
        name='project_get'
    ),
    path(
        route='update/<int:pk>/',
        view=ProjectGetView.as_view(),
        name='project_get'
    ),
    path(
        route='update/<int:pk>/finance/new/',
        view=ProjectGetView.as_view(),
        name='project_get'
    ),
    path(
        route='update/finance/<int:pk>/',
        view=ProjectGetView.as_view(),
        name='project_get'
    ),
]
