import React from 'react';

const JobListingManager = (props) => {
    const jobListings = props.jobListings;

    return (
        <div className="container mx-auto px-4" style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}>
            <h1 className="text-2xl font-bold text-[#212121] mb-4">Job Listings</h1>
            <div className="bg-white shadow-lg rounded" style={{ padding: '24px', borderRadius: '4px' }}>
                <table className="min-w-full divide-y divide-[#E0E0E0]">
                    <thead className="bg-[#FFC107] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Job Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#E0E0E0]">
                        {jobListings.map((job) => (
                            <tr key={job.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#757575]">{job.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                    <button 
                                        className="bg-[#4CAF50] text-white px-4 py-2 rounded" 
                                        style={{ transition: '0.3s ease-in-out' }} 
                                        onClick={() => props.onEdit(job.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="bg-[#F44336] text-white px-4 py-2 rounded ml-2" 
                                        style={{ transition: '0.3s ease-in-out' }} 
                                        onClick={() => props.onDelete(job.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobListingManager;