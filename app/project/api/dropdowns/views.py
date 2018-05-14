from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.dropdowns.serializers import DropdownModelsSerializer
from project.api.permissions import IsAdminOrReadOnly
from project.helper_models.models import Year, CalendarWeek
from project.project_assignment.models import LeadingRoleDropdown, LeadingTeamDropdown, ProjectResponsibilityDropdown, \
    PMDropdown, PlannerControlDropdown, ConstructionManagementDropdown, IllustratorDropdown, CommunicationsDropdown, \
    OverallPMTeamDropdown
from project.project_data.models import RadarPortfolioDropdown, BusinessProposalDropdown, ProjectTypeDropdown, \
    ProjectNatureDropdown, PoliticalSignificanceDropdown, ProjectPriorityDropdown, ProjectCharacterDropdown, \
    ControlCycleDropdown, RiskAssessmentDropdown, ProjectHandbookDropdown, ProjectStatusPhaseDropdown
from project.project_development.models import ProjectStatusDropdown, ProjectTendencyDropdown
from project.project_finances.models import FinancingDropdown, RequirementsAssessmentDropdown, CreditStatusDropdown, \
    YearlyForecast
from project.project_milestones.models import MilestoneDropdown, CommentaryOptions, TendenciesDropdown


class TendenciesDropdow(object):
    pass


class DropdownModelsView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = DropdownModelsSerializer

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
        project_management = PMDropdown.objects.all()
        planner_control = PlannerControlDropdown.objects.all()
        construction_management = ConstructionManagementDropdown.objects.all()
        illustrator = IllustratorDropdown.objects.all()
        communications = CommunicationsDropdown.objects.all()
        financing = FinancingDropdown.objects.all()
        requirements_assessment = RequirementsAssessmentDropdown.objects.all()
        credit_status = CreditStatusDropdown.objects.all()
        yearly_forecasts = YearlyForecast.objects.all()
        year = Year.objects.all()
        milestone_calendar_week = CalendarWeek.objects.all()
        milestone_value = MilestoneDropdown.objects.all()
        tendency = TendenciesDropdown.objects.all()
        commentary = CommentaryOptions.objects.all()
        project_status = ProjectStatusDropdown.objects.all()
        project_tendency = ProjectTendencyDropdown.objects.all()

    def get(self, request, **kwargs):
        """
        Return all dropdown options
        """
        return Response(self.serializer_class(self.QuerySets).data)
