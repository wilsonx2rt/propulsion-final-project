from django.urls import path, include


app_name = 'pm'

urlpatterns = [
    path('overview/', include('project.api.non_admin.overview.urls')),
    path('project_data/', include('project.api.non_admin.project_data.urls')),
    path('project_assignment/', include('project.api.non_admin.project_assignment.urls')),
    path('project_details/', include('project.api.non_admin.project_details.urls')),
    path('project_finances/', include('project.api.non_admin.project_finances.urls')),

]
