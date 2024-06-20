import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
// Images
import logo from '../../assets/TMTECH-removebg-preview.png'

const Sidebar = () => {

    const { t } = useTranslation();

    return (

        <label className="hamburger" htmlFor="toggleSidebar">
            <div className="sidebar">
                <input type="checkbox" id="toggleSidebar" />


                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                    </path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>

                <div className="sidebar-content">
                    <div className="sidebar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="sidebar-items">
                        <ul>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to='/product/a2-p'>Application-to-Person messaging (A2P)</Link></li>
                            <li><Link to='/product/p2-p'>Person-to-Person messaging (P2P)</Link></li>
                            <li><Link to='/product/p2-a'>Person-to-Application messaging (P2A)</Link></li>
                            <li><Link to='/product/sip-trunking'>SIP Trunking</Link></li>
                            <li><Link to='/product/virtual-calls'>Virtual Calls</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </label>

    );
};

export default Sidebar;
