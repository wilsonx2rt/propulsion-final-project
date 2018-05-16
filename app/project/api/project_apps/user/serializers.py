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

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'user_profile']
        read_only_fields = ['id']
