import {
    Alert
} from "antd";

import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";

import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

import Navbar from '../include/Navbar'
import Footer from '../include/Footer'

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';

import contactImg from '../../assets/contact.webp'

const Contact = () => {

    const [emailError, setEmailError] = useState('');
    const [selected, setSelected] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const { t } = useTranslation();
    const [focused, setFocused] = useState({
        name: false,
        surname: false,
        position: false,
        company: false,
        email: false,
        website_url: false,
        phone: false,
        message: false,
    });

    const handleFocus = (field) => {
        setFocused((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (field === 'email') {
            const disallowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'mail.ru', 'rambler.ru', 'yandex.ru', 'proton.me'];
            const domain = value.split('@')[1];
            if (disallowedDomains.includes(domain)) {
                setEmailError('Please use a company email address.');
            } else {
                setEmailError('');
            }
        }
        setFocused((prev) => ({ ...prev, [field]: !!value }));
    };

    const handleProductClick = (product) => {
        setSelectedProducts((prev) =>
            prev.includes(product)
                ? prev.filter((p) => p !== product)
                : [...prev, product]
        );
    };

    function sendEmail(e) {
        e.preventDefault();

        if (emailError) {
            return;
        }

        emailjs.sendForm('service_oqopidu', 'template_sz4jjao', e.target, '0hGQlVlNmMBKzCDVZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <>
            <Navbar />

            <div className="contact-form">
                <div className="contact-l">
                    <h1>{t('contact.heading')} <span>{t('contact.span_text')}</span> {t('contact.together')}</h1>
                    <div className="info">
                        <a href="mailto:info@tmtech.pro">
                            <FontAwesomeIcon icon={faEnvelope} />
                            info@tmtech.pro
                        </a>
                        <a href="tel:+995593423949">
                            <FontAwesomeIcon icon={faPhone} />
                            +995593423949
                        </a>
                        <a role="link" aria-disabled="true">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {t('contact.address')}
                        </a>
                    </div>
                    <img src={contactImg} alt={t('contact.alt_text')} />
                </div>
                <div className="contact-r">
                    <div className="content">
                        <form autoComplete="off" onSubmit={sendEmail}>
                            <div className="top">
                                <p>{t('contact.interested')}</p>
                                <div className="box-group">
                                    {['A2P SMS', 'P2P SMS', 'P2A SMS', 'SIP Trunking', 'Virtual Calling', 'Other'].map((product) => (
                                        <div
                                            key={product}
                                            className={`product-choose ${selectedProducts.includes(product) ? 'selected' : ''}`}
                                            onClick={() => handleProductClick(product)}
                                        >
                                            {t(`contact.${product.replace(/ /g, '_').toLowerCase()}`)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="middle">
                                {['name', 'surname', 'position', 'company', 'email', 'website_url', 'phone', 'message'].map((field) => (
                                    <div key={field} className={`input-container ${focused[field] ? 'focus' : ''}`}>
                                        {field === 'message' ? (
                                            <textarea
                                                name={`user_${field}`}
                                                className="input"
                                                onFocus={() => handleFocus(field)}
                                                onBlur={(e) => handleBlur(field, e.target.value)}
                                                required
                                            ></textarea>
                                        ) : (
                                            <input
                                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                                name={`user_${field}`}
                                                className="input"
                                                onFocus={() => handleFocus(field)}
                                                onBlur={(e) => handleBlur(field, e.target.value)}
                                                required
                                            />
                                        )}
                                        <label>{t(`contact.${field}`)}</label>
                                        <span>{t(`contact.${field}`)}</span>
                                    </div>
                                ))}
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    searchable
                                />
                            </div>
                            {emailError && (
                                <Alert
                                    className="alert_error"
                                    message={emailError}
                                    type="error"
                                    showIcon
                                    closable
                                    afterClose={() => setEmailError("")}
                                />
                            )}
                            <div className="bottom">
                                <ReCAPTCHA
                                    sitekey="6LdcKP0pAAAAACXxnDSVGfcxvZElrlUmlMq16LJQ"
                                    onChange={onChange}
                                    hl="en"
                                    theme="light"
                                    size="normal"
                                    type="image"
                                />
                                <div className="agree">
                                    <input type="checkbox" id="agree" name="agree" />
                                    <label htmlFor="agree">{t('contact.agree_text')}</label>
                                </div>
                                <button type='submit'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>{t('contact.send')}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Contact;
