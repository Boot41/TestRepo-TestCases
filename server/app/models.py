from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50, default='open')

    def __str__(self):
        return self.title

class Application(models.Model):
    job = models.ForeignKey(Job, related_name='applications', on_delete=models.CASCADE)
    candidate_email = models.EmailField()
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.candidate_email} applied for {self.job.title}'

class Notification(models.Model):
    employer_id = models.IntegerField()
    application = models.ForeignKey(Application, related_name='notifications', on_delete=models.CASCADE)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Notification for Employer {self.employer_id} about {self.application}'