import React from 'react';

const JobPostSuccessNotification = ({ onViewListing }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg border border-gray-300 p-6 flex flex-col items-center justify-center z-50">
      <h2 className="text-[#212121] font-[700] text-[24px] mb-2">Job Posted Successfully!</h2>
      <p className="text-[#757575] text-[14px] mb-4">Your job listing has been successfully posted. Engage with more candidates!</p>
      <button 
        onClick={onViewListing} 
        className="bg-[#4CAF50] text-white font-[400] text-[16px] py-[10px] px-[20px] rounded-[4px] hover:bg-[#45A049] transition-all duration-[0.3s] ease-in-out"
      >
        View Listing
      </button>
    </div>
  );
};

export default JobPostSuccessNotification;