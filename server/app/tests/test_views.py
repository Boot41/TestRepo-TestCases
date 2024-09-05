from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Job

class JobViewSetTests(APITestCase):
    def setUp(self):
        self.job = Job.objects.create(
            title='Test Job',
            description='Test Description',
            location='Test Location',
            job_type='Full-time',
        )

    def test_get_jobs(self):
        url = reverse('job-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_update_job_status(self):
        url = reverse('job-update-status', kwargs={'pk': self.job.pk})
        response = self.client.patch(url, {'status': 'closed'})
        self.job.refresh_from_db()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.job.status, 'closed')

    def test_update_job_status_invalid(self):
        url = reverse('job-update-status', kwargs={'pk': self.job.pk})
        response = self.client.patch(url, {'status': ''})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)