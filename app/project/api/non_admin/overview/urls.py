from django.urls import path

from project.api.non_admin.overview.views import NonAProjectOverviewView

app_name = 'overview'

urlpatterns = [
    path(
        route='',
        view=NonAProjectOverviewView.as_view(),
        name='overview'
    ),
]
