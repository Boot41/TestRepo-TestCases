import React, { useState } from 'react';

const JobPostingForm = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      jobTitle,
      jobDescription,
      requirements,
      location,
      jobType,
      applicationDeadline,
    };
    onSubmit(jobData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded p-6 w-80"
    >
      <h2 className="text-heading font-heading text-2xl mb-4">Post a Job</h2>
      <label className="block mb-2" htmlFor="jobTitle">Job Title</label>
      <input 
        type="text" 
        value={jobTitle} 
        onChange={(e) => setJobTitle(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
        required 
      />
      
      <label className="block mb-2" htmlFor="jobDescription">Job Description</label>
      <textarea 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
        required 
      />
      
      <label className="block mb-2" htmlFor="requirements">Requirements</label>
      <input 
        type="text" 
        value={requirements} 
        onChange={(e) => setRequirements(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
      />
      
      <label className="block mb-2" htmlFor="location">Location</label>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
      />
      
      <label className="block mb-2" htmlFor="jobType">Job Type</label>
      <input 
        type="text" 
        value={jobType} 
        onChange={(e) => setJobType(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
      />
      
      <label className="block mb-2" htmlFor="applicationDeadline">Application Deadline</label>
      <input 
        type="date" 
        value={applicationDeadline} 
        onChange={(e) => setApplicationDeadline(e.target.value)} 
        className="border border-borderColors rounded p-2 mb-4 w-full" 
      />
      
      <button 
        type="submit" 
        className="bg-primaryButton text-white font-body py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Submit Job Posting
      </button>
    </form>
  );
};

export default JobPostingForm;