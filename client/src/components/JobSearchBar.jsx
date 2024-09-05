import React, { useState } from 'react';

const JobSearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    onSearch({ keyword, location, jobType });
  };

  return (
    <div className="flex flex-col bg-primaryBackground p-medium rounded border border-borderColors shadow-md">
      <input
        type="text"
        placeholder="Enter job keywords..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border border-borderColors rounded p-small mb-medium focus:outline-none focus:ring-2 focus:ring-primaryColor"
        style={{ height: '40px', fontSize: '14px', fontFamily: '"Roboto", sans-serif' }}
      />
      <div className="flex space-x-4 mb-medium">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-borderColors rounded p-small focus:outline-none focus:ring-2 focus:ring-primaryColor"
          style={{ fontSize: '14px', fontFamily: '"Roboto", sans-serif' }}
        >
          <option value="" disabled>Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Remote">Remote</option>
        </select>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="border border-borderColors rounded p-small focus:outline-none focus:ring-2 focus:ring-primaryColor"
          style={{ fontSize: '14px', fontFamily: '"Roboto", sans-serif' }}
        >
          <option value="" disabled>Select Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-primaryButton text-white rounded p-medium focus:outline-none transition duration-300 ease-in-out hover:bg-opacity-80"
        style={{ height: '40px', fontSize: '14px', fontFamily: '"Roboto", sans-serif' }}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default JobSearchBar;