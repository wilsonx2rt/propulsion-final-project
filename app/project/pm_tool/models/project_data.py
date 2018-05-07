from django.db import models


class RadarPortfolioDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return  self.name


class BusinessProposalDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return  self.name


class ProjectTypeDropdown(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return  self.name


class ProjectData(models.Model):
    name = models.CharField(
        max_length=50,
        verbose_name='project name',
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



    # - Projekttart(*)
    # - Strategische
    # Bedeutung(N)
    # - Operative
    # Dringlichkeit(N)
    # - Politische
    # Bedeutung(*)
    # - Projektpriorität(L)
    # - Projektcharakter(Projektbezogen)(*)
    # - Steuerungszyklus(L)
    # - Projekt - Risikobeurteilung
    # - Projektziel
    # - Projekthandbuch(!)(Allow Uplodads!)
    # - E3 - Nummer
    # - Geschäftskategorie(N)
    # - Leistungsart(N)
    # - Verrechenbarkeit(N)
    # - Geschäftsnummer
    # - Projektstatus / Projektphase(*)
    # - Bemerkung