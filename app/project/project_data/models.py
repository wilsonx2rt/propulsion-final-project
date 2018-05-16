from django.db import models


class RadarPortfolioDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class BusinessProposalDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectTypeDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectNatureDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class PoliticalSignificanceDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


# with logic behind it !
class ProjectPriorityDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectCharacterDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


# with logic behind it !
class ControlCycleDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class RiskAssessmentDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectHandbookDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
    )

    def __str__(self):
        return self.name


class ProjectStatusPhaseDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        null=True,
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
        help_text='Project Namen',
        unique=True,
    )

    radar_portfolio = models.ForeignKey(
        verbose_name='radar or portfolio',
        help_text='Radar oder Projektportfolio',
        on_delete=models.SET_NULL,
        to='project_data.RadarPortfolioDropdown',
        blank=True,
        null=True,
    )

    business_proposal = models.ForeignKey(
        verbose_name='business proposal',
        help_text='Geschäftsantrag',
        on_delete=models.SET_NULL,
        to='project_data.BusinessProposalDropdown',
        blank=True,
        null=True,
    )

    project_type = models.ForeignKey(
        verbose_name='project type',
        help_text='Projekttyp',
        on_delete=models.SET_NULL,
        to='project_data.ProjectTypeDropdown',
        blank=True,
        null=True,
    )

    project_nature = models.ForeignKey(
        verbose_name='project nature',
        help_text='Projekttart',
        on_delete=models.SET_NULL,
        to='project_data.ProjectNatureDropdown',
        blank=True,
        null=True,
    )

    strategic_importance = models.IntegerField(
        verbose_name='strategic importance',
        help_text='Strategische Bedeutung',
        blank=True,
        null=True,
    )

    operational_urgency = models.IntegerField(
        verbose_name='operational urgency',
        help_text='Operative Dringlichkeit',
        blank=True,
        null=True,
    )

    political_significance = models.ForeignKey(
        verbose_name='political significance',
        help_text='Politische Bedeutung',
        on_delete=models.SET_NULL,
        to='project_data.PoliticalSignificanceDropdown',
        blank=True,
        null=True,
    )

    project_priority = models.ForeignKey(
        verbose_name='project priority',
        help_text='Projektpriorität (L)',
        on_delete=models.SET_NULL,
        to='project_data.ProjectPriorityDropdown',
        blank=True,
        null=True,
    )

    project_character = models.ForeignKey(
        verbose_name='project character',
        help_text='Projektcharakter (Projektbezogen)',
        on_delete=models.SET_NULL,
        to='project_data.ProjectCharacterDropdown',
        blank=True,
        null=True,
    )

    control_cycle = models.ForeignKey(
        verbose_name='control cycle',
        help_text='Steuerungszyklus (L)',
        on_delete=models.SET_NULL,
        to='project_data.ControlCycleDropdown',
        blank=True,
        null=True,
    )

    risk_assessment = models.ForeignKey(
        verbose_name='risk assessment',
        help_text='Projekt-Risikobeurteilung',
        on_delete=models.SET_NULL,
        to='project_data.RiskAssessmentDropdown',
        blank=True,
        null=True,
    )

    project_goal = models.CharField(
        verbose_name='project goal',
        help_text='Projektziel',
        max_length=100,
        blank=True,
        null=True
    )

    project_handbook = models.ForeignKey(
        verbose_name='project handbook',
        help_text='Projekthandbuch',
        on_delete=models.SET_NULL,
        to='project_data.ProjectHandbookDropdown',
        blank=True,
        null=True,
    )

    project_handbook_file = models.FileField(
        verbose_name='handbook file',
        help_text='handbuch datai',
        blank=True,
        null=True,
    )

    e3_number = models.CharField(
        verbose_name='e 3number',
        help_text='E3-Nummer',
        max_length=20,
        blank=True,
        null=True,
    )

    business_category = models.IntegerField(
        verbose_name='business category',
        help_text='Geschäftskategorie',
        blank=True,
        null=True,
    )

    service_nature = models.IntegerField(
        verbose_name='service nature',
        help_text='Leistungsart',
        blank=True,
        null=True,
    )

    invoiceability = models.IntegerField(
        verbose_name='invoicability',
        help_text='Verrechenbarkeit',
        blank=True,
        null=True,
    )

    business_number = models.CharField(
        verbose_name='business number',
        help_text='Geschäftsnummer',
        max_length=20,
        blank=True,
        null=True,
    )

    project_status_phase = models.ForeignKey(
        verbose_name='project status or phase',
        help_text='Projektstatus/Projektphase',
        on_delete=models.SET_NULL,
        to='project_data.ProjectStatusPhaseDropdown',
        blank=True,
        null=True,
    )

    comment = models.TextField(
        verbose_name='comment',
        help_text='Bemerkung',
        max_length=200,
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.name


    class Meta:
        verbose_name_plural = 'Project data'
