import React from 'react';
import { Link } from "react-router-dom"

import logo from '../../assets/TMTECH-removebg-preview.png'


const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <Link to='/'>
                                <img src={logo} alt="logo" />
                            </Link>
                            <h4>TMtech is your go-to resource for insights and direction in the rapidly evolving telecommunications industry.</h4>
                            <p className='copyright'>All right reserved - ©TMTECH 2024</p>
                        </div>
                        <div className="footer-item">
                            <div className="footer-links-group">
                                <div className="footer-links">
                                    <h3>Company</h3>
                                    <ul>

                                        <li><Link to="/about-us">About us</Link></li>
                                        <li><Link to="/contact">Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <h3>Products</h3>
                                    <ul>
                                        <li><Link to="/product/a2-p">A2P SMS</Link></li>
                                        <li><Link to="/product/p2-p">P2P SMS</Link></li>
                                        <li><Link to="/product/p2-a">P2A SMS</Link></li>
                                        <li><Link to="/product/sip-trunking">SIP Trunking</Link></li>
                                        <li><Link to="/product/virtual-calls">Virtual Calling</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <h3>Contact us</h3>
                                    <ul>
                                        <li><Link to="tel:+995593423949">+995593423949</Link></li>
                                        <li><Link to="mailto:info@tmtech.pro">info@tmtech.pro</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <h3>Address</h3>
                                    <ul>
                                        <li>Georgia, Tbilisi, Varketili, building 305a, #48</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer-bottom">

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
