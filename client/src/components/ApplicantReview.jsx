import React from 'react';

const ApplicantReview = ({ applicants, onStatusChange }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-heading font-heading text-2xl mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
        Applicant Review
      </h1>
      <div className="space-y-6">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="p-4 border border-borderColors rounded-lg shadow cardStyles" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-heading font-heading text-xl" style={{ fontFamily: '"Roboto", sans-serif' }}>
              {applicant.name}
            </h2>
            <p className="text-body" style={{ color: '#757575' }}>
              {applicant.details}
            </p>
            <div className="mt-4">
              <button
                onClick={() => onStatusChange(applicant.id, 'review')}
                className="bg-primaryButton text-white text-body font-bold py-2 px-4 rounded border-none hover:bg-opacity-80 transition duration-300"
              >
                Review
              </button>
              <button
                onClick={() => onStatusChange(applicant.id, 'reject')}
                className="ml-2 bg-secondaryButton text-white text-body font-bold py-2 px-4 rounded border-none hover:bg-opacity-80 transition duration-300"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantReview;