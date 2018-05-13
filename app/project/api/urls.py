# from django.urls import path, include
from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('auth/', include('project.api.auth.urls', namespace='auth')),
    path('registration/', include('project.api.registration.urls', namespace='registration')),
    path('overview/', include('project.api.overview.urls')),
    path('project_details/', include('project.api.project_details.urls')),
]
