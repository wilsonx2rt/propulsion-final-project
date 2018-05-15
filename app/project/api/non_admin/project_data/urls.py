from django.urls import path

from project.api.non_admin.project_data.views import NonAProjectDataUpdateView

app_name = 'project_data'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=NonAProjectDataUpdateView.as_view(),
        name='non_admin_project_data_update'
    ),
]
