from django.urls import path

from project.api.dropdowns.views import DropdownModelsView

app_name = 'dropdowns'

urlpatterns = [
    path(
        route='',
        view=DropdownModelsView.as_view(),
        name='projects overview'
    ),
]
