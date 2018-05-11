from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.permissions import IsAdminOrReadOnly
from project.user.serializers import UserSerializer
from .serializers import RegistrationSerializer, RegistrationValidationSerializer


class RegistrationView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly, ]
    serializer_class = RegistrationSerializer
    output_serailizer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_user = serializer.save(serializer.validated_data)
        return Response(self.output_serailizer_class(new_user).data)


class RegistrationValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationValidationSerializer
    output_serailizer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(
            serializer.validated_data,
        )
        return Response(self.output_serailizer_class(user).data)
