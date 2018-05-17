from django.urls import path

from project.api.project_apps.project_milestones.views import ProjectMilestonesCreateView, \
    ProjectMilestonesUpdateDeleteView, ProjectMilestonesGetView

app_name = 'project_milestones'

urlpatterns = [
    path(
        route='new/',
        view=ProjectMilestonesCreateView.as_view(),
        name='project_milestones_create'
    ),
    path(
        route='<int:pk>/',
        view=ProjectMilestonesUpdateDeleteView.as_view(),
        name='project_milestones_update_delete'
    ),
    path(
        route='milestones/<int:pk>/',
        view=ProjectMilestonesGetView.as_view(),
        name='project_milestones_get'
    ),
]
