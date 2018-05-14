from django.urls import path

from project.api.project_apps.project_assignment.views import ProjectAssignmentCreateView, ProjectAssignmentUpdateView

app_name = 'project_assignment'

urlpatterns = [
    path(
        route='new/',
        view=ProjectAssignmentCreateView.as_view(),
        name='project_assignment_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectAssignmentUpdateView.as_view(),
        name='project_assignment_update'
    ),
]
