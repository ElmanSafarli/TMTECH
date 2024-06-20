
import React from 'react';

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong, faComments, faPhone, faTowerCell } from "@fortawesome/free-solid-svg-icons";


const DeveloperLinksGroup = () => {

    return (
        <>
            <div className="link-box-group">
                <div className="link-box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faComments} />
                    </div>
                    <div className="bottom">
                        <div className="info">
                            <h3>Communications APIs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="link">
                            <a href="#developer-link-1"><FontAwesomeIcon icon={faArrowDownLong} /></a>
                        </div>
                    </div>
                </div>
                <div className="link-box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="bottom">
                        <div className="info">
                            <h3>Communications APIs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="link">
                            <a href="#developer-link-2"><FontAwesomeIcon icon={faArrowDownLong} /></a>
                        </div>
                    </div>
                </div>
                <div className="link-box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTowerCell} />
                    </div>
                    <div className="bottom">
                        <div className="info">
                            <h3>Communications APIs</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="link">
                            <a href="#developer-link-3"><FontAwesomeIcon icon={faArrowDownLong} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="developer-link-1">
                <div className="developer-link-item">
                    <div className="left">
                        <div className="icon"><FontAwesomeIcon icon={faComments} /></div>
                        <h2>Communications APIs</h2>
                    </div>
                    <div className="right">
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                    </div>
                </div>
                <div className="developer-link-hr"></div>
            </section>

            <section id="developer-link-2">
                <div className="developer-link-item">
                    <div className="left">
                        <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                        <h2>Unified Communications</h2>
                    </div>
                    <div className="right">
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                    </div>
                </div>
                <div className="developer-link-hr"></div>
            </section>

            <section id="developer-link-3">
                <div className="developer-link-item">
                    <div className="left">
                        <div className="icon"><FontAwesomeIcon icon={faTowerCell} /></div>
                        <h2>Contact Center</h2>
                    </div>
                    <div className="right">
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                        <div className="item">
                            <h4>TMTECH APİ Developer Portal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do </p>
                        </div>
                    </div>
                </div>
                <div className="developer-link-hr"></div>
            </section>
        </>
    );
};

export default DeveloperLinksGroup;
