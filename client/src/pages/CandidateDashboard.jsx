import React from 'react';
import JobSearchBar from '../components/JobSearchBar';
import JobResultsList from '../components/JobResultsList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CandidateDashboard = () => {
  return (
    <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '24px' }}>
      <Header />
      <div style={{ maxWidth: '80%', margin: 'auto', backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>Candidate Dashboard</h1>
        <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>The CandidateDashboard page will serve as a centralized hub for candidates...</p>
        <JobSearchBar />
        <JobResultsList />
      </div>
      <Footer />
    </div>
  );
};

export default CandidateDashboard;