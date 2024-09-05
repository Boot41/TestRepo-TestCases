from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Job
from .serializers import JobSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]  

    @action(detail=False, methods=['get'])
    def index(self, request):
        keywords = request.query_params.get('keywords', '')
        location = request.query_params.get('location', '')
        job_type = request.query_params.get('job_type', '')

        jobs = Job.objects.all()
        if keywords:
            jobs = jobs.filter(title__icontains=keywords) | jobs.filter(description__icontains=keywords)
        if location:
            jobs = jobs.filter(location__icontains=location)
        if job_type:
            jobs = jobs.filter(job_type=job_type)

        serializer = self.get_serializer(jobs, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['patch'])
    def update_status(self, request, job_id=None):
        job = self.get_object()
        new_status = request.data.get('status')
        if new_status:
            job.status = new_status
            job.save()
            return Response({'status': 'status updated'}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        job = self.get_object()
        serializer = self.get_serializer(job)
        return Response(serializer.data)