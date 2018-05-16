from rest_framework import serializers

from project.api.project_apps.yearly_forecasts.serializers import YearlyForecastSerializer
from project.project_finances.models import ProjectFinances, FinancingDropdown, RequirementsAssessmentDropdown, \
    CreditStatusDropdown


class FinancingDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancingDropdown
        fields = '__all__'


class RequirementsAssessmentDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementsAssessmentDropdown
        fields = '__all__'


class CreditStatusDropdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditStatusDropdown
        fields = '__all__'


class ProjectFinancesSerializer(serializers.ModelSerializer):
    financing = FinancingDropdownSerializer()
    requirements_assessment = RequirementsAssessmentDropdownSerializer()
    credit_status = CreditStatusDropdownSerializer()
    yearly_forecasts = YearlyForecastSerializer(many=True)

    class Meta:
        model = ProjectFinances
        fields = '__all__'


class ProjectFinancesUpdateSerializer(serializers.ModelSerializer):
    yearly_forecasts = YearlyForecastSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectFinances
        fields = '__all__'
