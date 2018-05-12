from rest_framework import serializers

from project.api.project_apps.helper_models.serializers import YearSerializer, CalendarWeekSerializer
from project.project_milestones.models import Milestones, TendenciesDropdown, MilestoneDropdown, CommentaryOptions


class TendenciesDropdownerializer(serializers.ModelSerializer):
    class Meta:
        model = TendenciesDropdown
        fields = '__all__'


class MilestoneDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilestoneDropdown
        fields = '__all__'


class CommentaryOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentaryOptions
        fields = '__all__'


class ProjectMilestonesSerializer(serializers.ModelSerializer):
    year = YearSerializer()
    milestone_calendar_week = CalendarWeekSerializer()
    milestone_value = MilestoneDropdownSerializer()
    tendency = TendenciesDropdownerializer()
    commentary = CommentaryOptionsSerializer()

    class Meta:
        model = Milestones
        fields = '__all__'