import React, { useState } from 'react';

const JobStatusUpdate = ({ statuses, onUpdate }) => {
  const [selectedStatus, setSelectedStatus] = useState(statuses[0]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate(selectedStatus);
  };

  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontFamily: '"Roboto", sans-serif', fontWeight: '700', fontSize: '24px', color: '#212121', lineHeight: '1.5' }}>Update Job Status</h2>
      <select value={selectedStatus} onChange={handleStatusChange} style={{ border: '1px solid #E0E0E0', padding: '8px', borderRadius: '4px', marginBottom: '16px', width: '100%' }}>
        {statuses.map((status, index) => (
          <option key={index} value={status}>{status}</option>
        ))}
      </select>
      <button onClick={handleUpdate} style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '12px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: '0.3s ease-in-out', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }}>
        Update Status
      </button>
    </div>
  );
};

export default JobStatusUpdate;