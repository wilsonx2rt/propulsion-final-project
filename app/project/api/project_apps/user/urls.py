from django.urls import path

from project.api.project_apps.user.views import UserProfileGetUpdateDeleteView

app_name = 'user'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=UserProfileGetUpdateDeleteView.as_view(),
        name='get_user_profile',
    ),
]
