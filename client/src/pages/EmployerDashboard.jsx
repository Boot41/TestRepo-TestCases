import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import ApplicationNotifications from '../components/ApplicationNotifications';

const EmployerDashboard = () => {
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '24px' }}>
            <Header />
            <main style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', marginBottom: '16px' }}>Employer Dashboard</h1>
                <ApplicationNotifications />
                <JobPostingForm />
                <JobListingManager />
            </main>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;