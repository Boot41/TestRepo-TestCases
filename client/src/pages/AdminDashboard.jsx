import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminJobOverview from '../components/AdminJobOverview';
import JobStatusUpdate from '../components/JobStatusUpdate';
import ComplianceAlert from '../components/ComplianceAlert';

const AdminDashboard = () => {
    return (
        <div className="font-['Roboto'] bg-[#F5F5F5] min-h-screen">
            <Header />
            <main className="container mx-auto p-[24px]">
                <h1 className="text-[#212121] text-[24px] font-[700] mb-[16px]">Admin Dashboard</h1>
                <ComplianceAlert />
                <AdminJobOverview />
                <JobStatusUpdate />
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;