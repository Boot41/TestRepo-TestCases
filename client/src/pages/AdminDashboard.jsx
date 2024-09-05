import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminJobOverview from '../components/AdminJobOverview';
import JobStatusUpdate from '../components/JobStatusUpdate';
import ComplianceAlert from '../components/ComplianceAlert';

const AdminDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}>
            <Header />
            <main className="flex-grow p-6 max-w-screen-lg mx-auto" style={{ backgroundColor: '#FFFFFF' }}>
                <h1 className="text-heading text-2xl font-bold mb-6" style={{ color: '#212121' }}>Admin Dashboard</h1>
                <ComplianceAlert />
                <AdminJobOverview />
                <JobStatusUpdate />
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;