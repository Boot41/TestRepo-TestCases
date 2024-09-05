import React from 'react';

const JobResultsList = ({ jobListings }) => {
  return (
    <div className="p-4 bg-gray-100" style={{ backgroundColor: '#F5F5F5' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#212121' }}>Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobListings.map((job, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4" style={{ border: '1px solid #E0E0E0' }}>
            <div className="flex items-center">
              <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-bold" style={{ color: '#2196F3' }}>{job.title}</h3>
                <p className="text-sm" style={{ color: '#757575' }}>{job.company}</p>
                <p className="text-sm" style={{ color: '#757575' }}>{job.location}</p>
                <p className="mt-2" style={{ color: '#757575' }}>{job.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobResultsList;