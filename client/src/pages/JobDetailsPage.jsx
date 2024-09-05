import React from 'react'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import JobDetails from '../components/JobDetails'; 

const JobDetailsPage = () => { 
    return ( 
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif', padding: '24px' }}> 
            <Header /> 
            <div style={{ maxWidth: '80%', margin: 'auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }}> 
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>Job Details</h1> 
                <JobDetails /> 
            </div> 
            <Footer /> 
        </div> 
    ); 
}; 

export default JobDetailsPage;