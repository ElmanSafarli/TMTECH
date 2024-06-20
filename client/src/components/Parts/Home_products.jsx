import React from 'react';

import { Element } from 'react-scroll';

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

import product from '../../assets/header.jpg'
import a2pHome from '../../assets/a2pHome.png'
import a2pHome1 from '../../assets/a2pHome1.png'
import p2pHome from '../../assets/p2pIcon.png'
import p2aIcon from '../../assets/p2aIcon.png'
import p2aHome from '../../assets/p2ahomeimg.png'
import sipHome from '../../assets/sipHome.png'
import vcHome from '../../assets/vcHome.png'
import apiIconHome from '../../assets/apiIcon.png'
import vcmainHome from '../../assets/vcmainHome.png'
import apimainHome from '../../assets/api.png'
import sipmainHome from '../../assets/Sip-trunking.png.webp'
import p2pmainHome from '../../assets/p2phome.png'



const HomeProducts = () => {

    const { t } = useTranslation();

    return (
        <Element name="second">
            <section id="second">
                <div className="products">
                    <div className="products-content">

                        <div className="section-info">
                            <h1>{t('product.item_1')} <span>{t('product.item_2')}</span></h1>
                            <p>{t('product.item_3')}</p>
                        </div>

                        <div className="products-group">
                            <div className="products-l">
                                <div className="top">
                                    <div className="product-box small">
                                        <div className="content">
                                            <Link to='/product/a2-p'>
                                                <div className="icon"><img src={a2pHome} altproduct /></div>
                                                <div className="img"><img src={a2pHome1} alt="product" className="fill-img" /></div>
                                                <div className="bottom">
                                                    <h3>A2P SMS</h3>
                                                    <p>Empower your app with A2P messaging! Reach users directly with high-delivery messaging for marketing, notifications, and more. Enhance engagement and reliability.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-box normal">
                                        <Link to='/product/p2-a'>
                                            <div className="icon"><img src={p2aIcon} altproduct /></div>
                                            <div className="img"> <img src={p2aHome} alt="product" className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>P2A SMS</h3>
                                                <p>Enhance user interaction with P2A messaging! Enable interactive services like surveys and info retrieval, ensuring seamless communication.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-box normal">
                                        <Link to='/product/p2-p'>
                                            <div className="icon"><img src={p2pHome} altproduct /></div>
                                            <div className="img"> <img src={p2pmainHome} alt="product" className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>P2P SMS</h3>
                                                <p>Instant, reliable P2P communication! Enjoy seamless message exchange for personal and business use, ensuring messages always get through.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="end">

                                    <div className="product-box long">
                                        <Link to='/product/sip-trunking'>
                                            <div className="icon"><img src={sipHome} altproduct /></div>
                                            <div className="img"> <img src={sipmainHome} alt="product" className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>SIP Trunking</h3>
                                                <p>Efficient voice communication with SIP-Trunking! Consolidate voice services over the internet, reducing costs and improving flexibility.</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="product-box wee">
                                        <Link to='/product/virtual-calls'>
                                            <div className="icon"><img src={vcHome} altproduct /></div>
                                            <div className="img"> <img src={vcmainHome} alt="product" className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>Virtual Calling</h3>
                                                <p>Expand possibilities with Virtual Calling! Conduct high-quality virtual meetings and webinars worldwide, enhancing communication flexibility.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="products-r">
                                <div className="product-box small">
                                    <div className="icon"><img src={apiIconHome} altproduct /></div>
                                    <div className="img"> <img src={apimainHome} alt="product" className="fill-img" /></div>
                                    <div className="bottom">
                                        <h3>Communication APIs</h3>
                                        <p>Integrate communication seamlessly with our API! Support messaging, voice, and video calls effortlessly, tailored to your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element >

    );
};

export default HomeProducts;
