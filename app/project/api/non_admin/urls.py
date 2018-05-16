from django.urls import path, include


app_name = 'pm'

urlpatterns = [
    path('overview/', include('project.api.non_admin.overview.urls')),
    path('project_data/', include('project.api.non_admin.project_data.urls')),
    path('project_assignment/', include('project.api.non_admin.project_assignment.urls')),
    path('project_details/', include('project.api.non_admin.project_details.urls')),
    path('project_finances/', include('project.api.non_admin.project_finances.urls')),
    path('project_allocation/', include('project.api.non_admin.project_allocation.urls')),
    path('project_milestones/', include('project.api.non_admin.project_milestones.urls')),
    path('project_dependencies/', include('project.api.non_admin.project_dependencies.urls')),
    path('project_development/', include('project.api.non_admin.project_development.urls')),

]
