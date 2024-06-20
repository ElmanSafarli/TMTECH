
import React, { useState } from 'react';
import Navbar from '../include/Navbar';
import HomeContact from '../Parts/Home_contact';
import Footer from '../include/Footer';

const About = () => {

    return (
        <>
            <Navbar />
            <div className="about-page">
                About us
            </div>
            <HomeContact />
            <Footer />
        </>
    );
};

export default About;
