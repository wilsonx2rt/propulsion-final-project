from django.urls import path

from project.api.non_admin.project_assignment.views import NonAProjectAssignmentUpdateDeleteView

app_name = 'project_assignment'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=NonAProjectAssignmentUpdateDeleteView.as_view(),
        name='overview'
    ),
]
