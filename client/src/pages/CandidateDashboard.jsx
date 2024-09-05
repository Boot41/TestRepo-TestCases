import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import ApplicationHistory from '../components/ApplicationHistory';

const CandidateDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <Header />

            <main className="flex-grow container mx-auto p-6 md:p-8 lg:p-12">
                <h1 className="text-3xl font-bold text-heading mb-6">Candidate Dashboard</h1>
                <JobSearchBar />
                <section className="mt-6 shadow-md bg-white rounded" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <h2 className="text-2xl font-semibold text-heading p-4 border-b border-borderColors">Application History</h2>
                    <ApplicationHistory />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CandidateDashboard;