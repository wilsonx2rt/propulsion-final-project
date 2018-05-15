from rest_framework import serializers

from project.project_finances.models import YearlyForecast


class YearlyForecastSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearlyForecast
        fields = '__all__'


class YearlyForecastUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearlyForecast
        fields = '__all__'
        read_only_fields = ['project']
