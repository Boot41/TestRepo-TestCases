from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Job

class JobViewSetTests(APITestCase):
    def setUp(self):
        self.job = Job.objects.create(
            title='Software Engineer',
            description='Develop applications',
            location='Remote',
            job_type='full_time',
            company_name='Tech Company'
        )

    def test_search_jobs(self):
        url = reverse('job-list') + 'search/'  # Assuming default naming from router
        response = self.client.get(url, {'keywords': 'Software'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(self.job.title.encode(), response.content)

    def test_retrieve_job_details(self):
        url = reverse('job-detail', kwargs={'pk': self.job.id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.job.title)
