import React from 'react';

const AdminJobOverview = (props) => {
    return (
        <div className="bg-primaryBackground p-medium rounded border border-borderColors shadow-md">
            <h1 className="text-heading text-2xl font-heading mb-medium">Active Job Postings</h1>
            <div className="flex mb-medium">
                <select className="mr-small border border-inputStyles border-focusState rounded p-small">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Closed</option>
                </select>
                <select className="mr-small border border-inputStyles border-focusState rounded p-small">
                    <option>Employer</option>
                    <option>Employer 1</option>
                    <option>Employer 2</option>
                </select>
                <input type="date" className="border border-inputStyles border-focusState rounded p-small" />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left text-heading font-heading py-2 px-4">Job Title</th>
                            <th className="text-left text-heading font-heading py-2 px-4">Employer</th>
                            <th className="text-left text-heading font-heading py-2 px-4">Status</th>
                            <th className="text-left text-heading font-heading py-2 px-4">Posting Date</th>
                            <th className="text-left text-heading font-heading py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.jobPostings.map((job) => (
                            <tr key={job.id} className="border-b hover:bg-gray-50 transition-all duration-300">
                                <td className="py-2 px-4">{job.title}</td>
                                <td className="py-2 px-4">{job.employer}</td>
                                <td className="py-2 px-4">{job.status}</td>
                                <td className="py-2 px-4">{job.postingDate}</td>
                                <td className="py-2 px-4">
                                    <button className="bg-primaryButton text-white rounded p-small hover:bg-successColor transition-all duration-300">View</button>
                                    <button className="bg-secondaryButton text-black rounded p-small hover:bg-warningColor transition-all duration-300 ml-small">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminJobOverview;