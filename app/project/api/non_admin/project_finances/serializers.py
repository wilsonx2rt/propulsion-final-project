from rest_framework import serializers

from project.api.project_apps.yearly_forecasts.serializers import YearlyForecastSerializer
from project.project_finances.models import ProjectFinances


class NonAProjectFinancesUpdateSerializer(serializers.ModelSerializer):
    yearly_forecasts = YearlyForecastSerializer(many=True)

    class Meta:
        model = ProjectFinances
        fields = ['financing', 'investment_number', 'spending_current_year', 'yearly_forecasts']
        read_only_fields = ['financing', 'investment_number', 'spending_current_year']
