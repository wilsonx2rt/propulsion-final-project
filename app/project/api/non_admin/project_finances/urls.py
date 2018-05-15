from django.urls import path

from project.api.non_admin.project_finances.views import NonAProjectFinancesUpdateView

app_name = 'project_finances'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=NonAProjectFinancesUpdateView.as_view(),
        name='overview'
    ),
]
