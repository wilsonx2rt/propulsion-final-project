from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('auth/', include('project.api.auth.urls', namespace='auth')),
    path('registration/', include('project.api.project_apps.user.registration.urls', namespace='registration')),
    path('overview/', include('project.api.overview.urls')),
    path('project_details/', include('project.api.project_details.urls')),
    path('dropdowns/', include('project.api.dropdowns.urls')),
    path('project_data/', include('project.api.project_apps.project_data.urls')),
    path('project_assignment/', include('project.api.project_apps.project_assignment.urls')),
    path('project_finances/', include('project.api.project_apps.project_finances.urls')),
    path('yearly_forecast/', include('project.api.project_apps.yearly_forecasts.urls')),
    path('project_allocation/', include('project.api.project_apps.project_allocation.urls')),
    path('project_dependencies/', include('project.api.project_apps.project_dependencies.urls')),
    path('project_development/', include('project.api.project_apps.project_development.urls')),
    path('project_milestones/', include('project.api.project_apps.project_milestones.urls')),
    path('pm/', include('project.api.non_admin.urls')),
    path('user/', include('project.api.project_apps.user.urls')),
]
