from rest_framework import status
from rest_framework.test import APITestCase
from .models import Job

class JobViewSetTest(APITestCase):
    def setUp(self):
        self.employer_id = 1
        self.job_data = {
            'title': 'Software Engineer',
            'description': 'Develop software applications.',
            'employer_id': self.employer_id
        }

    def test_create_job(self):
        response = self.client.post('/api/employers/{}/jobs/'.format(self.employer_id), self.job_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Job.objects.count(), 1)
        self.assertEqual(Job.objects.get().title, 'Software Engineer')

    def test_fetch_jobs(self):
        Job.objects.create(title='Software Engineer', description='Develop software applications.', employer_id=self.employer_id)
        response = self.client.get('/api/employers/{}/jobs/'.format(self.employer_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
