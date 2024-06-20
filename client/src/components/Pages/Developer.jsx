import React from 'react';

import Navbar from '../include/Navbar';
import DeveloperHeader from '../Parts/Developer_header';
import HomeContact from '../Parts/Home_contact'
import Footer from '../include/Footer'

import '../Parts/styles/development.css'
import DeveloperLinksGroup from '../Parts/Developer_link_box_group';


const Developers = () => {

    return (
        <>
            <Navbar />
            <DeveloperHeader />
            <DeveloperLinksGroup />
            <HomeContact />
            <Footer />
        </>
    );
};

export default Developers;
