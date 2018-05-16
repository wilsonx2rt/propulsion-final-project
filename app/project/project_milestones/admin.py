from django.contrib import admin

from project.project_milestones.models import MilestoneDropdown, TendenciesDropdown, Milestones

admin.site.register(MilestoneDropdown)
admin.site.register(TendenciesDropdown)
admin.site.register(Milestones)
