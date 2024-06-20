import React from 'react';
import Navbar from '../include/Navbar';

import { useTranslation } from 'react-i18next';

// Images
import headerImg from '../../assets/for P2A.png.webp'

import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom"
import ArrowIcon from '../include/ArrowIcon';


const HomeHeaderTop = () => {

    const { t } = useTranslation();

    return (
        <header id="first">
            <div className="header">
                <Navbar />
                <main>
                    <div className="header-content">
                        <div className="header-l">
                            <h1>{t('header.item_1')}</h1>
                            <p>{t('header.item_2')}</p>
                            <div className="header-l-bottom">
                                <Link to="/contact" className="link">{t('header.item_3')}</Link>
                                <div className="arrow">
                                    <ScrollLink to="second" smooth={true} duration={10}>
                                        <ArrowIcon />
                                    </ScrollLink>
                                </div>
                            </div>

                            <div className="header-arror">
                                <ScrollLink to="second" smooth={true} duration={10}>
                                    <ArrowIcon />
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="header-r">
                            <img src={headerImg} alt="header" />
                        </div>
                    </div>
                </main>
            </div>
        </header>
    );
};

export default HomeHeaderTop;
