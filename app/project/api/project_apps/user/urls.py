from django.urls import path

from project.api.project_apps.user.views import UserProfileGetUpdateDeleteView, GetCurrentUser

app_name = 'user'

urlpatterns = [
    path(
        route='<int:pk>/',
        view=UserProfileGetUpdateDeleteView.as_view(),
        name='get_user_profile',
    ),
    path(
        route='',
        view=GetCurrentUser.as_view(),
        name='get_request_user',
    )
]
