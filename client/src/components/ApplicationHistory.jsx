import React from 'react';

const ApplicationHistory = ({ applications }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-primaryBackground" style={{ fontFamily: '"Roboto", sans-serif' }}>
      <h2 className="text-heading text-24px font-heading mb-4">Application History</h2>
      <div className="border border-borderColors rounded-lg shadow-shadows bg-white p-4">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div key={application.id} className="border-b border-borderColors py-4">
              <h3 className="text-heading text-20px font-heading">{application.position}</h3>
              <p className="text-body text-14px mb-1">Application Date: {application.date}</p>
              <p className={`text-14px ${application.status === 'Success' ? 'text-successColor' : application.status === 'Error' ? 'text-errorColor' : 'text-warningColor'}`}>
                Status: {application.status}
              </p>
            </div>
          ))
        ) : (
          <p className="text-body text-14px">No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationHistory;