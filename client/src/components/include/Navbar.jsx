import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Sidebar from './Sidebar';

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

// Images
import logo from '../../assets/TMTECH-removebg-preview.png'

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faMicrophoneLines, faNetworkWired, faPhone } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const { t } = useTranslation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [activeContent, setActiveContent] = useState(null);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };


    const handleContentDisplay = (target) => {
        setActiveContent(target);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav >
            <div className={isScrolled ? 'navbar-fixed' : 'navbar-content'} >
                <div className="inline">
                    <div className="nav-logo">
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-items">
                        <ul className="inline">
                            <li className="dropdown">
                                <button onClick={toggleDropdown} className="inline dropdown-toggle">
                                    {t('navBar.item_1')}
                                    <div className="arrow">
                                        <svg className={`navitemArrow ${isDropdownVisible ? 'rotated' : ''}`} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7339 5.99997L0.104736 -3.05176e-05L5.7339 3.72292L11.3631 -3.05176e-05L5.7339 5.99997Z" fill="black" />
                                        </svg>
                                    </div>
                                </button>
                                <div className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
                                    <div className="dropdown-content">
                                        <ul className="dropdown-links">
                                            <li className="dropdown-link" onMouseEnter={() => handleContentDisplay('navdropcont1')}><FontAwesomeIcon icon={faMessage} />{t('navBar.item_4')}</li>
                                            <li className="dropdown-link" onMouseEnter={() => handleContentDisplay('navdropcont2')}><FontAwesomeIcon icon={faMicrophoneLines} />{t('navBar.item_5')}</li>
                                            <li className="dropdown-link" onMouseEnter={() => handleContentDisplay('navdropcont3')}><FontAwesomeIcon icon={faNetworkWired} />{t('navBar.item_6')}</li>
                                        </ul>
                                        <div className="dropdown-details">
                                            <div className={`navdropcont1 navdropcont ${activeContent === 'navdropcont1' ? 'active' : ''}`}>
                                                <ul>
                                                    <li><Link to='/product/a2-p'>{t('navBar.item_7')}</Link></li>
                                                    <li><Link to='/product/p2-p'>{t('navBar.item_8')}</Link></li>
                                                    <li><Link to='/product/p2-a'>{t('navBar.item_9')}</Link></li>
                                                </ul>
                                            </div>
                                            <div className={`navdropcont2 navdropcont ${activeContent === 'navdropcont2' ? 'active' : ''}`}>
                                                <ul>
                                                    <li><Link to='/product/sip-trunking'>{t('navBar.item_10')}</Link></li>
                                                    <li><Link to='/product/virtual-calls'>{t('navBar.item_11')}</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about-us">{t('navBar.item_2')}</Link></li>
                            <li><Link to="/contact">{t('navBar.item_3')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="inline navbar-content-r">
                    <LanguageSwitcher />
                    <Link to='contact' className='navbarContact'><FontAwesomeIcon icon={faPhone} /><p>{t('navBar.item_3')}</p></Link>
                    <Sidebar />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
