import React, { useState } from 'react';

const JobApplicationForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to the parent or API
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6">
      <h2 className="text-2xl font-bold text-heading mb-4">Job Application Form</h2>
      <div className="mb-4">
        <label className="block text-body text-sm mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-borderColors p-2 rounded focus:outline-none focus:border-primaryColor transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-body text-sm mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-borderColors p-2 rounded focus:outline-none focus:border-primaryColor transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-body text-sm mb-2" htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-borderColors p-2 rounded focus:outline-none focus:border-primaryColor transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-body text-sm mb-2" htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          required
          className="border border-borderColors p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-primaryColor text-white py-2 px-4 rounded hover:bg-primaryColor/90 transition duration-300"
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;