from django.contrib import admin

from project.project_milestones.models import MilestoneDropdown, TendenciesDropdown, CommentaryOptions, \
    Milestones

admin.site.register(MilestoneDropdown)
admin.site.register(TendenciesDropdown)
admin.site.register(CommentaryOptions)
admin.site.register(Milestones)
