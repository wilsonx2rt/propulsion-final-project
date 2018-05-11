from django.urls import path

from project.api.overview.views import OverviewView

app_name = 'overview'

urlpatterns = [
    path('', OverviewView.as_view(), name='overview'),
]
