import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import JobPostSuccessNotification from '../components/JobPostSuccessNotification';

const EmployerDashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-primaryBackground font-roboto">
            {/* Header section */}
            <Header />
            
            {/* Main content area */}
            <main className="flex-grow p-medium">
                <h1 className="text-heading text-24 font-heading mb-medium">Employer Dashboard</h1>
                <p className="text-body text-14 mb-large">
                    The EmployerDashboard page provides a comprehensive job management experience, incorporating components such as
                    Header, Footer, JobPostingForm, JobListingManager, and the newly designed JobPostSuccessNotification. 
                    This layout ensures that employers have all tools and feedback at their fingertips for effective job management.
                </p>
                
                {/* Job Posting Form Section */}
                <JobPostingForm />

                {/* Job Listing Manager Section */}
                <JobListingManager />

                {/* Job Post Success Notification Section */}
                <JobPostSuccessNotification />
            </main>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default EmployerDashboard;