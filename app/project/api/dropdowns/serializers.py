from rest_framework import serializers

from project.api.project_apps.helper_models.serializers import YearSerializer, CalendarWeekSerializer
from project.api.project_apps.project_assignment.serializers import LeadingRoleDropdownSerializer, \
    LeadingTeamDropdownSerializer, ProjectResponsibilityDropdownSerializer, \
    PMDropdownSerializer, PlannerControlDropdownSerializer, ConstructionManagementDropdownSerializer, \
    IllustratorDropdownSerializer, CommunicationsDropdownSerializer, OverallPMTeamDropdownSerializer
from project.api.project_apps.project_data.serializers import RadarPortfolioDropdownSerializer, \
    BusinessProposalDropdownSerializer, ProjectTypeDropdownSerializer, ProjectNatureDropdownSerializer, \
    PoliticalSignificanceDropdownSerializer, ProjectPriorityDropdownSerializer, ProjectCharacterDropdownSerializer, \
    ControlCycleDropdownSerializer, RiskAssessmentDropdownSerializer, ProjectHandbookDropdownSerializer, \
    ProjectStatusPhaseDropdownSerializer
from project.api.project_apps.project_development.serializers import ProjectStatusDropdownSerializer, \
    ProjectTendencyDropdownSerializer
from project.api.project_apps.project_finances.serializers import FinancingDropdownSerializer, \
    RequirementsAssessmentDropdownSerializer, CreditStatusDropdownSerializer, YearlyForecastSerializer
from project.api.project_apps.project_milestones.serializers import MilestoneDropdownSerializer, \
    TendenciesDropdownerializer, CommentaryOptionsSerializer


class DropdownModelsSerializer(serializers.Serializer):
    # PROJECT DATA
    radar_portfolio = RadarPortfolioDropdownSerializer(many=True)
    business_proposal = BusinessProposalDropdownSerializer(many=True)
    project_type = ProjectTypeDropdownSerializer(many=True)
    project_nature = ProjectNatureDropdownSerializer(many=True)
    political_significance = PoliticalSignificanceDropdownSerializer(many=True)
    project_priority = ProjectPriorityDropdownSerializer(many=True)
    project_character = ProjectCharacterDropdownSerializer(many=True)
    control_cycle = ControlCycleDropdownSerializer(many=True)
    risk_assessment = RiskAssessmentDropdownSerializer(many=True)
    project_handbook = ProjectHandbookDropdownSerializer(many=True)
    project_status_phase = ProjectStatusPhaseDropdownSerializer(many=True)
    # PROJECT ASSIGNMENT
    leading_role = LeadingRoleDropdownSerializer(many=True)
    leading_team = LeadingTeamDropdownSerializer(many=True)
    project_responsibility = ProjectResponsibilityDropdownSerializer(many=True)
    overall_pm_team = OverallPMTeamDropdownSerializer(many=True)
    project_management = PMDropdownSerializer(many=True)
    planner_control = PlannerControlDropdownSerializer(many=True)
    construction_management = ConstructionManagementDropdownSerializer(many=True)
    illustrator = IllustratorDropdownSerializer(many=True)
    communications = CommunicationsDropdownSerializer(many=True)
    # PROJECT FINANCES
    financing = FinancingDropdownSerializer(many=True)
    requirements_assessment = RequirementsAssessmentDropdownSerializer(many=True)
    credit_status = CreditStatusDropdownSerializer(many=True)
    yearly_forecasts = YearlyForecastSerializer(many=True)
    # PROJECT MILESTONES
    year = YearSerializer(many=True)
    milestone_calendar_week = CalendarWeekSerializer(many=True)
    milestone_value = MilestoneDropdownSerializer(many=True)
    tendency = TendenciesDropdownerializer()
    commentary = CommentaryOptionsSerializer(many=True)
    # PROJECT DEVELOPMENT
    project_status = ProjectStatusDropdownSerializer(many=True)
    project_tendency = ProjectTendencyDropdownSerializer(many=True)
