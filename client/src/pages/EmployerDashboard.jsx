import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="bg-primaryBackground font-['Roboto', sans-serif] min-h-screen">
      <Header />
      
      <main className="p-medium">
        <h1 className="text-heading text-24 leading-heading mb-large">Employer Dashboard</h1>
        <p className="text-body text-14 mb-medium">The EmployerDashboard page will serve as a centralized space for employers, featuring a Header for navigation, a Footer for additional links, the innovative JobPostingForm for entering job details, and a JobListingManager for overseeing all posted jobs.</p>
        
        <div className="bg-white shadow-md p-large rounded border border-borderColors mb-large">
          <JobPostingForm />
        </div>
        
        <div className="bg-white shadow-md p-large rounded border border-borderColors">
          <JobListingManager />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmployerDashboard;