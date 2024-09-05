from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50, default='open')

class Application(models.Model):
    candidate_name = models.CharField(max_length=255)
    candidate_email = models.EmailField()
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    submitted_at = models.DateTimeField(auto_now_add=True)
    resume = models.FileField(upload_to='resumes/')
