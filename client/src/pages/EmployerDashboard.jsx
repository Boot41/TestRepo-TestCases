import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
    return (
        <div className="bg-white min-h-screen font-roboto">
            <Header />
            <main className="px-6 py-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Employer Dashboard</h1>
                <p className="text-gray-600 mb-6">The EmployerDashboard page provides a holistic job management experience by incorporating essential components, including a Header for navigation, a Footer for supplementary information, a JobPostingForm for creating new listings, and the JobListingManager for overseeing existing postings.</p>
                <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
                    <JobPostingForm />
                </div>
                <div className="bg-gray-100 p-4 rounded-md shadow-md">
                    <JobListingManager />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;