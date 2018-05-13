from django.urls import path

from project.api.overview.views import ProjectOverviewView, ProjectManagersOverviewView

app_name = 'overview'

urlpatterns = [
    path(
        route='projects/',
        view=ProjectOverviewView.as_view(),
        name='projects overview'
    ),
    path(
        route='managers/',
        view=ProjectManagersOverviewView.as_view(),
        name='managers overview'
    )
]
