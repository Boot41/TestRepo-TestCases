import React from 'react';

const ApplicationNotifications = ({ notifications, onReview, onRespond }) => {
  return (
    <div className="bg-white shadow-lg rounded border border-gray-300 p-4" style={{ maxWidth: '80%', margin: 'auto' }}>
      <h2 className="text-heading font-bold text-2xl mb-4" style={{ lineHeight: '1.5' }}>
        Job Application Notifications
      </h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded">
            <div>
              <p className="text-heading font-medium">{notification.candidateName}</p>
              <p className="text-body">{notification.jobTitle}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-primaryColor hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => onReview(notification.id)}
              >
                Review
              </button>
              <button
                className="bg-secondaryColor hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => onRespond(notification.id)}
              >
                Respond
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationNotifications;