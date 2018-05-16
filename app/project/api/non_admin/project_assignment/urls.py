from django.urls import path

from project.api.non_admin.project_assignment.views import NonAProjectAssignmentView

app_name = 'project_assignment'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=NonAProjectAssignmentView.as_view(),
        name='non_admin_project_assignment'
    ),
]
