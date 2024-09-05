from rest_framework.exceptions import ValidationError
from rest_framework import serializers
from .models import Job

class JobSerializerTests(APITestCase):
    def test_valid_serializer(self):
        valid_data = {
            'title': 'New Job',
            'description': 'New Job Description',
            'location': 'New Location',
            'job_type': 'Part-time',
        }
        serializer = JobSerializer(data=valid_data)
        self.assertTrue(serializer.is_valid())

    def test_invalid_serializer(self):
        invalid_data = {'title': ''}
        serializer = JobSerializer(data=invalid_data)
        self.assertFalse(serializer.is_valid())
        with self.assertRaises(ValidationError):
            serializer.is_valid(raise_exception=True)