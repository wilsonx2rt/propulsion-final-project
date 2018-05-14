from django.urls import path

from project.api.project_apps.project_development.views import ProjectDevelopmentCreateView, \
    ProjectDevelopmentUpdateDeleteView

app_name = 'project_development'

urlpatterns = [
    path(
        route='new/',
        view=ProjectDevelopmentCreateView.as_view(),
        name='project_development_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectDevelopmentUpdateDeleteView.as_view(),
        name='project_development_update_delete'
    ),
]
