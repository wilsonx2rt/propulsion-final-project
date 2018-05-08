from django.db import models


class RadarPortfolioDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class BusinessProposalDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class ProjectTypeDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class ProjectNatureDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class PoliticalSignificanceDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


# with logic behind it !
class ProjectPriorityDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class ProjectCharacterDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


# with logic behind it !
class ControlCycleDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class RiskAssessmentDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class ProjectHandbookDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


class ProjectStatusPhaseDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


"""
Main
"""


class ProjectData(models.Model):
    name = models.CharField(
        max_length=50,
        verbose_name='project name',
        unique=True,
    )

    radar_portfolio = models.ForeignKey(
        verbose_name='radar or portfolio',
        on_delete=models.SET_NULL,
        to='pm_tool.RadarPortfolioDropdown',
        blank=True,
        null=True,
    )

    business_proposal = models.ForeignKey(
        verbose_name='business proposal',
        on_delete=models.SET_NULL,
        to='pm_tool.BusinessProposalDropdown',
        blank=True,
        null=True,
    )

    project_type = models.ForeignKey(
        verbose_name='project type',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectTypeDropdown',
        blank=True,
        null=True,
    )

    project_nature = models.ForeignKey(
        verbose_name='project nature',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectNatureDropdown',
        blank=True,
        null=True,
    )

    strategic_importance = models.IntegerField(
        verbose_name='strategic importance',
        blank=True,
    )

    operational_urgency = models.IntegerField(
        verbose_name='operational urgency',
        blank=True,
    )

    political_significance = models.ForeignKey(
        verbose_name='political significance',
        on_delete=models.SET_NULL,
        to='pm_tool.PoliticalSignificanceDropdown',
        blank=True,
        null=True,
    )

    project_priority = models.ForeignKey(
        verbose_name='project priority',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectPriorityDropdown',
        blank=True,
        null=True,
    )

    project_character = models.ForeignKey(
        verbose_name='project character',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectCharacterDropdown',
        blank=True,
        null=True,
    )

    control_cycle = models.ForeignKey(
        verbose_name='control cycle',
        on_delete=models.SET_NULL,
        to='pm_tool.ControlCycleDropdown',
        blank=True,
        null=True,
    )

    risk_assessment = models.ForeignKey(
        verbose_name='risk assessment',
        on_delete=models.SET_NULL,
        to='pm_tool.RiskAssessmentDropdown',
        blank=True,
        null=True,
    )

    project_goal = models.CharField(
        verbose_name='project goal',
        max_length=100,
        blank=True,
    )

    project_handbook = models.ForeignKey(
        verbose_name='project handbook',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectHandbookDropdown',
        blank=True,
        null=True,
    )

    project_handbook_file = models.FileField(
        verbose_name='handbook file',
        blank=True,
        null=True,
    )

    # TODO: If needed, add file input  field for project habdbook

    e3_number = project_goal = models.CharField(
        verbose_name='project goal',
        max_length=20,
        blank=True,
    )

    business_category = models.IntegerField(
        verbose_name='business category',
        blank=True,
    )

    service_nature = models.IntegerField(
        verbose_name='service nature',
        blank=True,
    )

    invoiceability = models.IntegerField(
        verbose_name='invoicability',
        blank=True,
    )

    business_number = models.CharField(
        verbose_name='business',
        max_length=20,
        blank=True,
    )

    project_status_phase = models.ForeignKey(
        verbose_name='project status or phase',
        on_delete=models.SET_NULL,
        to='pm_tool.ProjectStatusPhaseDropdown',
        blank=True,
        null=True,
    )

    comment = models.TextField(
        verbose_name='comment',
        max_length=200,
        blank=True,
    )
