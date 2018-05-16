from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from project.api.permissions import IsAdminOrReadOnly
from project.api.project_apps.user.serializers import UserSerializer

User = get_user_model()


class UserProfileGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminOrReadOnly, IsAuthenticated]
    serializer_class = UserSerializer
    queryset = User.objects.all()
