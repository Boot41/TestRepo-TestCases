from rest_framework import status
from rest_framework.test import APITestCase
from .models import Job, Application, Notification

class NotificationTests(APITestCase):

    def setUp(self):
        self.job = Job.objects.create(title='Test Job', description='Test Description', location='Test Location', job_type='Full-time')
        self.application_data = {'candidate_email': 'test@example.com'}

    def test_create_application_and_notification(self):
        response = self.client.post(f'/api/jobs/{self.job.id}/applications/', self.application_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        notification = Notification.objects.first()
        self.assertIsNotNone(notification)
        self.assertEqual(notification.employer_id, self.job.id)

    def test_fetch_notifications(self):
        application = Application.objects.create(job=self.job, candidate_email='test2@example.com')
        Notification.objects.create(employer_id=self.job.id, application=application)

        response = self.client.get(f'/api/employers/{self.job.id}/notifications/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreater(len(response.data), 0)

    def test_mark_notification_as_read(self):
        application = Application.objects.create(job=self.job, candidate_email='test3@example.com')
        notification = Notification.objects.create(employer_id=self.job.id, application=application)

        response = self.client.patch(f'/api/employers/{self.job.id}/notifications/{notification.id}/read/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        notification.refresh_from_db()
        self.assertTrue(notification.is_read)