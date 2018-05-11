from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('auth/', include('project.api.auth.urls', namespace='auth')),
    path('registration/', include('project.api.registration.urls', namespace='registration')),
]
