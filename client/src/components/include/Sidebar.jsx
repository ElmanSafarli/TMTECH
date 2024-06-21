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
                            <li><Link to="/">{t('footer.item_1')}</Link></li>
                            <li><Link to="/about-us">{t('footer.item_2')}</Link></li>
                            <li><Link to="/contact">{t('footer.item_3')}</Link></li>
                            <li><Link to='/product/a2-p'>{t('footer.item_4')}</Link></li>
                            <li><Link to='/product/p2-p'>{t('footer.item_5')}</Link></li>
                            <li><Link to='/product/p2-a'>{t('footer.item_6')}</Link></li>
                            <li><Link to='/product/sip-trunking'>{t('footer.item_7')}</Link></li>
                            <li><Link to='/product/virtual-calls'>{t('footer.item_8')}</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </label>

    );
};

export default Sidebar;
