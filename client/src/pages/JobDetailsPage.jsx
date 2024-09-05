import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails';
import JobApplicationForm from '../components/JobApplicationForm';

const JobDetailsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primaryBackground p-medium font-roboto">
            <Header />
            <main className="flex-grow container mx-auto p-large">
                <JobDetails />
                <div className="mt-large">
                    <h2 className="text-heading font-heading text-2xl">Apply for this Job</h2>
                    <JobApplicationForm />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobDetailsPage;