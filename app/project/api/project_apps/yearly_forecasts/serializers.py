from rest_framework import serializers

from project.api.project_apps.helper_models.serializers import YearSerializer
from project.project_finances.models import YearlyForecast


class YearlyForecastSerializer(serializers.ModelSerializer):
    year = YearSerializer()

    class Meta:
        model = YearlyForecast
        fields = '__all__'


class YearlyForecastUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearlyForecast
        fields = '__all__'
        read_only_fields = ['project']
