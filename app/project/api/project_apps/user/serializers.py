from django.contrib.auth import get_user_model
from rest_framework import serializers

from project.user.models import UserProfile

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'isAdmin']
        read_only_fields = ['id']


class UserSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer()
    name = serializers.SerializerMethodField('get_full_name')

    def get_full_name(self, user):
        return f'{user.first_name} {user.last_name}'

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'user_profile', 'name']
        read_only_fields = ['id']
