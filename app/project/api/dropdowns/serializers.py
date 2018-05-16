from django.contrib.auth import get_user_model
from rest_framework import serializers

from project.api.project_apps.helper_models.serializers import YearSerializer, CalendarWeekSerializer, QuarterSerializer
from project.api.project_apps.project_assignment.serializers import LeadingRoleDropdownSerializer, \
    LeadingTeamDropdownSerializer, ProjectResponsibilityDropdownSerializer, \
    PlannerControlDropdownSerializer, ConstructionManagementDropdownSerializer, \
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
from project.helper_models.models import Year, CalendarWeek, Quarters
from project.project_assignment.models import LeadingRoleDropdown, LeadingTeamDropdown, ProjectResponsibilityDropdown, \
    PlannerControlDropdown, ConstructionManagementDropdown, IllustratorDropdown, CommunicationsDropdown, \
    OverallPMTeamDropdown
from project.project_data.models import RadarPortfolioDropdown, BusinessProposalDropdown, ProjectTypeDropdown, \
    ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, ProjectCharacterDropdown, \
    ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, ProjectStatusPhaseDropdown
from project.project_development.models import ProjectStatusDropdown, ProjectTendencyDropdown
from project.project_finances.models import FinancingDropdown, RequirementsAssessmentDropdown, CreditStatusDropdown, \
    YearlyForecast
from project.project_milestones.models import MilestoneDropdown, CommentaryOptions, TendenciesDropdown
from project.user.serializers import UserSerializer

User = get_user_model()


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
    project_management = UserSerializer(many=True)
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
    quarter = QuarterSerializer(many=True)
    milestone_calendar_week = CalendarWeekSerializer(many=True)
    milestone_value = MilestoneDropdownSerializer(many=True)
    tendency = TendenciesDropdownerializer()
    commentary = CommentaryOptionsSerializer(many=True)
    # PROJECT DEVELOPMENT
    project_status = ProjectStatusDropdownSerializer(many=True)
    project_tendency = ProjectTendencyDropdownSerializer(many=True)

    # BUNDULED QuerySets CALLED IN VIEWS'S RESPONSE
    class QuerySets:
        radar_portfolio = RadarPortfolioDropdown.objects.all()
        business_proposal = BusinessProposalDropdown.objects.all()
        project_type = ProjectTypeDropdown.objects.all()
        project_nature = ProjectNatureDropdown.objects.all()
        political_significance = PoliticalSignificanceDropdown.objects.all()
        project_priority = ProjectPriorityDropdown.objects.all()
        project_character = ProjectCharacterDropdown.objects.all()
        control_cycle = ControlCycleDropdown.objects.all()
        risk_assessment = RiskAssessmentDropdown.objects.all()
        project_handbook = ProjectHandbookDropdown.objects.all()
        project_status_phase = ProjectStatusPhaseDropdown.objects.all()
        leading_role = LeadingRoleDropdown.objects.all()
        leading_team = LeadingTeamDropdown.objects.all()
        project_responsibility = ProjectResponsibilityDropdown.objects.all()
        overall_pm_team = OverallPMTeamDropdown.objects.all()
        project_management = User.objects.all()
        planner_control = PlannerControlDropdown.objects.all()
        construction_management = ConstructionManagementDropdown.objects.all()
        illustrator = IllustratorDropdown.objects.all()
        communications = CommunicationsDropdown.objects.all()
        financing = FinancingDropdown.objects.all()
        requirements_assessment = RequirementsAssessmentDropdown.objects.all()
        credit_status = CreditStatusDropdown.objects.all()
        yearly_forecasts = YearlyForecast.objects.all()
        year = Year.objects.all()
        quarter = Quarters.objects.all()
        milestone_calendar_week = CalendarWeek.objects.all()
        milestone_value = MilestoneDropdown.objects.all()
        tendency = TendenciesDropdown.objects.all()
        commentary = CommentaryOptions.objects.all()
        project_status = ProjectStatusDropdown.objects.all()
        project_tendency = ProjectTendencyDropdown.objects.all()
