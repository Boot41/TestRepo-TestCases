# This module can contain additional services related to job search,
# such as connecting to external APIs or advanced filtering logic.

def filter_jobs(jobs, keywords, location, job_type):
    if keywords:
        jobs = jobs.filter(title__icontains=keywords) | jobs.filter(description__icontains=keywords)
    if location:
        jobs = jobs.filter(location__icontains=location)
    if job_type:
        jobs = jobs.filter(job_type=job_type)
    return jobs