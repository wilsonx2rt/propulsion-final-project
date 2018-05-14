from rest_framework import serializers

from project.project_finances.models import ProjectFinances, FinancingDropdown, RequirementsAssessmentDropdown, \
    CreditStatusDropdown, YearlyForecast


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


class YearlyForecastSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearlyForecast
        fields = '__all__'

# TODO: SERVE EVERY YEARLY FORECAST RELATED TO A PROJECT WITH THE PROJECT DETAILS CALL
class ProjectFinancesSerializer(serializers.ModelSerializer):
    financing = FinancingDropdownSerializer()
    requirements_assessment = RequirementsAssessmentDropdownSerializer()
    credit_status = CreditStatusDropdownSerializer()
    yearly_forecasts = YearlyForecastSerializer(many=True)

    class Meta:
        model = ProjectFinances
        fields = '__all__'
