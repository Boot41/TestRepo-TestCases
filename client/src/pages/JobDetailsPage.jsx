import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails';
import ApplicantReview from '../components/ApplicantReview';

const JobDetailsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primaryBackground" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <Header />
            <main className="flex-grow p-6">
                <h1 className="text-heading font-heading text-primaryColor mb-6">Job Details</h1>
                <JobDetails />
                <div className="mt-8 p-4 border border-borderColors rounded" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <h2 className="text-secondaryColor font-heading text-lg mb-4">Applicant Reviews</h2>
                    <ApplicantReview />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobDetailsPage;