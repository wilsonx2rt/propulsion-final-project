from django.urls import path

from project.api.project_apps.project_dependencies.views import ProjectDependenciesCreateView, \
    ProjectDependenciesUpdateDeleteView

app_name = 'project_dependencies'

urlpatterns = [
    path(
        route='new/',
        view=ProjectDependenciesCreateView.as_view(),
        name='project_Dependencies_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectDependenciesUpdateDeleteView.as_view(),
        name='project_dependencies_update_delete'
    ),
]
