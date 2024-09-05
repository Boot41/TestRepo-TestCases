import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminJobOverview from '../components/AdminJobOverview';
import JobStatusUpdate from '../components/JobStatusUpdate';
import ComplianceAlert from '../components/ComplianceAlert';

const AdminDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primaryBackground font-roboto">
            <Header />
            <main className="flex-grow p-6">
                <h1 className="text-heading text-24 font-heading mb-6">Admin Dashboard</h1>
                <ComplianceAlert />
                <section className="my-6">
                    <AdminJobOverview />
                </section>
                <section className="my-6">
                    <JobStatusUpdate />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;