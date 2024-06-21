import React from 'react';
import { useTranslation } from 'react-i18next';

// Images
import contactImg from '../../assets/3d-abstract-landscape-background-with-extruding-blocks.jpg'


const HomeContact = () => {

    const { t } = useTranslation();

    return (
        <section>
            <div className="contact">
                <div className="contact-us">
                    <div className="content">
                        <div className="main">
                            <img className="fill-img" src={contactImg}
                                alt="contact" />
                        </div>
                        <div className="info">
                            <div>
                                <h3>
                                    {t('home_contact.heading')} <span>{t('home_contact.heading_span')}</span>
                                </h3>
                                <a href="/contact">{t('home_contact.book_call')}</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeContact;
