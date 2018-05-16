from rest_framework import serializers

from project.api.project_apps.helper_models.serializers import YearSerializer, QuarterSerializer
from project.project_allocation.models import ProjectAllocation


class ProjectAllocationSerializer(serializers.ModelSerializer):
    year = YearSerializer()
    quarter = QuarterSerializer()

    class Meta:
        model = ProjectAllocation
        fields = '__all__'


class ProjectAllocationUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectAllocation
        fields = '__all__'
