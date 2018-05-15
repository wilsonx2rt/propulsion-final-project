from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.api.dropdowns.serializers import DropdownModelsSerializer
from project.api.permissions import IsAdminOrReadOnly


class DropdownModelsView(GenericAPIView):
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = DropdownModelsSerializer

    def get(self, request, **kwargs):
        """
        Return all dropdown options
        """
        return Response(self.serializer_class(self.serializer_class.QuerySets).data)
