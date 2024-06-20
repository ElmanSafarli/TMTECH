
import React, { useState } from 'react';
import Navbar from '../include/Navbar';
import HomeContact from '../Parts/Home_contact';
import Footer from '../include/Footer';

import '../Parts/styles/development_doc.css'

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCodeBranch, faMessage, faMicrophoneLines, faNetworkWired, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

// Images
import message from '../../assets/message.png'

const Docs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <Navbar />
            <main>
                <div className="products_doc">
                    <h1>TMTECH Developer Center</h1>
                    <p>Communications APIs</p>
                    <div className="products_docs_box_keys">
                        <ul>
                            <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
                                <FontAwesomeIcon icon={faMessage} />Messaging
                            </li>
                            <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
                                <FontAwesomeIcon icon={faMicrophoneLines} /> Voice
                            </li>
                            <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
                                <FontAwesomeIcon icon={faNetworkWired} /> Communication APIs
                            </li>
                            <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
                                <FontAwesomeIcon icon={faCodeBranch} /> Sip Trunking
                            </li>
                            <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>
                                <FontAwesomeIcon icon={faShieldHalved} /> Privacy and Security
                            </li>
                        </ul>
                    </div>

                    <div className="products_docs_doors">
                        {activeTab === 0 && (
                            <div className="product_doc_door" id="content-1">
                                <div className="product_doc_door_box_group">
                                    <div className="product_doc_door_box_big">
                                        <div className="img">
                                            <img src={message} alt="product" />
                                            <div className="content">
                                                <h3>Messaging</h3>
                                                <p>TMTECH Messaging APIs are easy to set up and allow you to engage your customers via a diverse assortment of messaging channels. </p>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <ul>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                                <li><FontAwesomeIcon icon={faCircleCheck} /> <p>Example name for step</p></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="product_doc_door_box_small">
                                        <div className="img"></div>
                                        <div className="info">
                                            <h1>Send a SMS</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do adipiscing elit sed do adipiscing elit</p>
                                        </div>
                                    </div>

                                    <div className="product_doc_door_box_small">
                                        <div className="img"></div>
                                        <div className="info">
                                            <h1>Messaging</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do adipiscing elit sed do adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 1 && (
                            <div className="product_doc_door" id="content-2">
                                <p>Content for Voice</p>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className="product_doc_door" id="content-3">
                                <p>Content for Network APIs 1</p>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className="product_doc_door" id="content-4">
                                <p>Content for Messaging 2</p>
                            </div>
                        )}
                        {activeTab === 4 && (
                            <div className="product_doc_door" id="content-5">
                                <p>Content for Messaging 4</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <HomeContact />
            <Footer />
        </>
    );
};

export default Docs;
