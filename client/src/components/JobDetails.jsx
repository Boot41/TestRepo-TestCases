import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div className="max-w-[80%] mx-auto bg-white shadow-md rounded-[4px] p-[16px] mt-[24px]" style={{ fontFamily: '"Roboto", sans-serif' }}>
      <h2 className="text-[24px] font-[700] text-[#212121] mb-[16px]">{job.title}</h2>
      <p className="text-[14px] font-[400] text-[#757575] mb-[16px]">{job.description}</p>
      <div className="border-t border-[#E0E0E0] pt-[16px]">
        <h3 className="text-[20px] font-[700] text-[#212121]">Details:</h3>
        <ul className="list-disc list-inside">
          <li className="text-[14px] text-[#757575]">Location: {job.location}</li>
          <li className="text-[14px] text-[#757575]">Salary: {job.salary}</li>
          <li className="text-[14px] text-[#757575]">Posted On: {new Date(job.postedOn).toLocaleDateString()}</li>
        </ul>
      </div>
      <button className="mt-[24px] bg-[#4CAF50] text-white text-[16px] font-[400] py-[8px] px-[16px] rounded-[4px] shadow-md hover:bg-[#388E3C] transition-all duration-[0.3s] ease-in-out">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;