import {
    Alert
} from "antd";


import ReCAPTCHA from "react-google-recaptcha";
// 6LdcKP0pAAAAACXxnDSVGfcxvZElrlUmlMq16LJQ SITE KEY   

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

        emailjs.sendForm('service_08k8ucq', 'template_sz4jjao', e.target, '0hGQlVlNmMBKzCDVZ')
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
                    <h1>Let’s discuss on something <span>cool</span> together</h1>
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
                            Georgia, Tbilisi, Varketili, building 305a, #48
                        </a>
                    </div>
                    <img src={contactImg} alt="contact" />
                </div>
                <div className="contact-r">
                    <div className="content">
                        <form autoComplete="off" onSubmit={sendEmail}>
                            <div className="top">
                                <p>I’m interested in...</p>
                                <div className="box-group">
                                    {['A2P SMS', 'P2P SMS', 'P2A SMS', 'SIP Trunking', 'Virtual Calling', 'Other'].map((product) => (
                                        <div
                                            key={product}
                                            className={`product-choose ${selectedProducts.includes(product) ? 'selected' : ''}`}
                                            onClick={() => handleProductClick(product)}
                                        >
                                            {product}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="middle">
                                <div className={`input-container ${focused.name ? 'focus' : ''}`}>
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="input"
                                        onFocus={() => handleFocus('name')}
                                        onBlur={(e) => handleBlur('name', e.target.value)}
                                        required
                                    />
                                    <label htmlFor="">First Name</label>
                                    <span>First Name</span>
                                </div>
                                <div className={`input-container ${focused.surname ? 'focus' : ''}`}>
                                    <input
                                        type="text"
                                        name="user_surname"
                                        className="input"
                                        onFocus={() => handleFocus('surname')}
                                        onBlur={(e) => handleBlur('surname', e.target.value)}
                                        required
                                    />
                                    <label htmlFor="">Last Name</label>
                                    <span>Last Name</span>
                                </div>
                                <div className={`input-container ${focused.position ? 'focus' : ''}`}>
                                    <input
                                        type="text"
                                        name="user_position"
                                        className="input"
                                        onFocus={() => handleFocus('position')}
                                        onBlur={(e) => handleBlur('position', e.target.value)}
                                        required
                                    />
                                    <label htmlFor="">Position</label>
                                    <span>Position</span>
                                </div>
                                <div className={`input-container ${focused.company ? 'focus' : ''}`}>
                                    <input
                                        type="text"
                                        name="user_company"
                                        className="input"
                                        onFocus={() => handleFocus('company')}
                                        onBlur={(e) => handleBlur('company', e.target.value)}
                                        required
                                    />
                                    <label htmlFor="">Company Name</label>
                                    <span>Company Name</span>
                                </div>
                                <div className={`input-container ${focused.email ? 'focus' : ''}`}>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="input"
                                        onFocus={() => handleFocus('email')}
                                        onBlur={(e) => handleBlur('email', e.target.value)}
                                        required
                                    />
                                    <label>Compnay Email</label>
                                    <span>Compnay Email</span>
                                </div>
                                <div className={`input-container ${focused.website_url ? 'focus' : ''}`}>
                                    <input
                                        type="url"
                                        name="website_url"
                                        className="input"
                                        placeholder="https://example.com"
                                        onFocus={() => handleFocus('website_url')}
                                        onBlur={(e) => handleBlur('website_url', e.target.value)}
                                        required
                                    />
                                    <label>Website Url</label>
                                    <span>Website Url</span>
                                </div>

                                <div className={`input-container ${focused.phone ? 'focus' : ''}`}>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        className="input"
                                        placeholder="+123456789"
                                        onFocus={() => handleFocus('phone')}
                                        onBlur={(e) => handleBlur('phone', e.target.value)}
                                        required
                                    />
                                    <label>Phone Number</label>
                                    <span>Phone Number</span>
                                </div>
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    searchable
                                />;
                                <div className={`input-container textarea ${focused.message ? 'focus' : ''}`}>
                                    <textarea
                                        name="message"
                                        className="input"
                                        onFocus={() => handleFocus('message')}
                                        onBlur={(e) => handleBlur('message', e.target.value)}
                                        required
                                    ></textarea>
                                    <label>Message</label>
                                    <span>Message</span>
                                </div>
                            </div>
                            {emailError ? (
                                <Alert
                                    className="alert_error"
                                    message={emailError}
                                    type="error"
                                    showIcon
                                    closable
                                    afterClose={() => setEmailError("")}
                                />
                            ) : null}
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
                                    <label htmlFor="agree">Connect me with an expert! I’d like to get more information about TMtech products.</label>
                                </div>
                                <button type='submit'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Send</span>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer />
        </>

    );
};

export default Contact;
