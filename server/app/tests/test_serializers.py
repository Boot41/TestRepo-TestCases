from rest_framework.exceptions import ValidationError
from django.test import TestCase
from .models import Job
from .serializers import JobSerializer

class JobSerializerTests(TestCase):
    def test_valid_serializer(self):
        job_data = {'title': 'Data Scientist', 'description': 'Analyze data', 'location': 'New York', 'job_type': 'full_time', 'company_name': 'Data Corp'}
        serializer = JobSerializer(data=job_data)
        self.assertTrue(serializer.is_valid())

    def test_invalid_serializer(self):
        job_data = {'title': '', 'description': 'Analyze data', 'location': 'New York', 'job_type': 'full_time', 'company_name': 'Data Corp'}
        serializer = JobSerializer(data=job_data)
        self.assertFalse(serializer.is_valid())
        self.assertIn('title', serializer.errors)
