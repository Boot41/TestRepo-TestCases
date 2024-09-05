from django.test import TestCase
from .models import Job, Application

class JobModelTests(TestCase):
    def test_job_creation(self):
        job = Job.objects.create(title='Software Engineer', description='Develop software', location='Remote', job_type='full-time')
        self.assertIsInstance(job, Job)

class ApplicationModelTests(TestCase):
    def test_application_creation(self):
        job = Job.objects.create(title='Software Engineer', description='Develop software', location='Remote', job_type='full-time')
        application = Application.objects.create(candidate_name='John Doe', candidate_email='john.doe@example.com', job=job)
        self.assertIsInstance(application, Application)
