from django.urls import path

from project.api.project_apps.project_allocation.views import ProjectAllocationUpdateDeleteView

app_name = 'project_allocation'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=ProjectAllocationUpdateDeleteView.as_view(),
        name='overview'
    ),
]
