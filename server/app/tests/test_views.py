from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import Job, Application

class ApplicationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.job = Job.objects.create(title='Software Engineer', description='Develop software', location='Remote', job_type='full-time')

    def test_apply_for_job(self):
        response = self.client.post(f'/api/jobs/{self.job.id}/apply', {
            'candidate_name': 'John Doe',
            'candidate_email': 'john.doe@example.com',
            'resume': 'path/to/resume'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_applications(self):
        # First, create an application
        self.client.post(f'/api/jobs/{self.job.id}/apply', {
            'candidate_name': 'John Doe',
            'candidate_email': 'john.doe@example.com',
            'resume': 'path/to/resume'
        })
        # Now list applications for the candidate
        response = self.client.get('/api/candidates/john.doe@example.com/applications/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreater(len(response.data), 0, 'No applications found')
