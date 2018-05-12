from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.user.serializers import UserSerializer
from .serializers import PasswordResetSerializer, PasswordResetValidationSerializer


class PasswordResetView(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetSerializer
    output_serailizer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(serializer.validated_data)
        return Response(self.output_serailizer_class(user).data)


class PasswordResetValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetValidationSerializer
    output_serailizer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(
            serializer.validated_data,
        )
        return Response(self.output_serailizer_class(user).data)
