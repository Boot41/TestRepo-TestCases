from rest_framework import viewsets
from .models import Job
from .serializers import JobSerializer
from rest_framework.permissions import IsAuthenticated

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(employer_id=self.request.user.id)
