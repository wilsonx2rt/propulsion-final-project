from django.urls import path

from project.api.non_admin.project_details.views import NonAProjectListView, NonAProjectGetView

app_name = 'project_details'

urlpatterns = [
    path(
        route='',
        view=NonAProjectListView.as_view(),
        name='project_list_all_fields'
    ),
    path(
        route='<int:pk>/',
        view=NonAProjectGetView.as_view(),
        name='project_get_by_id'
    ),
]
