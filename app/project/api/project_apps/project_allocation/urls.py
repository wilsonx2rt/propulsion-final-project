from django.urls import path

from project.api.project_apps.project_allocation.views import ProjectAllocationCreateView, \
    ProjectAllocationUpdateDeleteView, ProjectAllocationGetView

app_name = 'project_allocation'

urlpatterns = [
    path(
        route='new/',
        view=ProjectAllocationCreateView.as_view(),
        name='project_allocation_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectAllocationUpdateDeleteView.as_view(),
        name='project_allocation_update_delete'
    ),
    path(
        route='allocations/<int:pk>/',
        view=ProjectAllocationGetView.as_view(),
        name='project_allocation_get'
    ),
]
