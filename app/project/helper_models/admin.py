from django.contrib import admin

from project.helper_models.models import Year, CalendarWeek, UserProfile

admin.site.register(Year)
admin.site.register(CalendarWeek)
admin.site.register(UserProfile)
