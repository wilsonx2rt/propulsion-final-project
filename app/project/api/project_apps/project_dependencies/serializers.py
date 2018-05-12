from rest_framework import serializers

from project.project_dependencies.models import ProjectDependencies


class ProjectDependenciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDependencies
        fields = '__all__'
