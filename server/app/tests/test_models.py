from django.test import TestCase
from .models import Job

class JobModelTest(TestCase):
    def setUp(self):
        self.job = Job.objects.create(title='Software Engineer', description='Develop software applications.', employer_id=1)

    def test_job_str(self):
        self.assertEqual(str(self.job), 'Software Engineer')

    def test_job_fields(self):
        self.assertEqual(self.job.title, 'Software Engineer')
        self.assertEqual(self.job.description, 'Develop software applications.')
