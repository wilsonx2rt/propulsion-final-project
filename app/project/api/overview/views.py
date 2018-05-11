from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.permissions import IsAdminOrReadOnly


class OverviewView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly, ]

    def get(self, request):
        return Response('Hello')
