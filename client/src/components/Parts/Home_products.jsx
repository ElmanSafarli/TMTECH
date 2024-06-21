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
                                                <div className="icon"><img src={a2pHome} alt={t('product.alt_text')} /></div>
                                                <div className="img"><img src={a2pHome1} alt={t('product.alt_text')} className="fill-img" /></div>
                                                <div className="bottom">
                                                    <h3>{t('product.a2p_sms_title')}</h3>
                                                    <p>{t('product.a2p_sms_desc')}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-box normal">
                                        <Link to='/product/p2-a'>
                                            <div className="icon"><img src={p2aIcon} alt={t('product.alt_text')} /></div>
                                            <div className="img"><img src={p2aHome} alt={t('product.alt_text')} className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>{t('product.p2a_sms_title')}</h3>
                                                <p>{t('product.p2a_sms_desc')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-box normal">
                                        <Link to='/product/p2-p'>
                                            <div className="icon"><img src={p2pHome} alt={t('product.alt_text')} /></div>
                                            <div className="img"><img src={p2pmainHome} alt={t('product.alt_text')} className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>{t('product.p2p_sms_title')}</h3>
                                                <p>{t('product.p2p_sms_desc')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="end">
                                    <div className="product-box long">
                                        <Link to='/product/sip-trunking'>
                                            <div className="icon"><img src={sipHome} alt={t('product.alt_text')} /></div>
                                            <div className="img"><img src={sipmainHome} alt={t('product.alt_text')} className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>{t('product.sip_trunking_title')}</h3>
                                                <p>{t('product.sip_trunking_desc')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-box wee">
                                        <Link to='/product/virtual-calls'>
                                            <div className="icon"><img src={vcHome} alt={t('product.alt_text')} /></div>
                                            <div className="img"><img src={vcmainHome} alt={t('product.alt_text')} className="fill-img" /></div>
                                            <div className="bottom">
                                                <h3>{t('product.virtual_calls_title')}</h3>
                                                <p>{t('product.virtual_calls_desc')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="products-r">
                                <div className="product-box small">
                                    <div className="icon"><img src={apiIconHome} alt={t('product.alt_text')} /></div>
                                    <div className="img"><img src={apimainHome} alt={t('product.alt_text')} className="fill-img" /></div>
                                    <div className="bottom">
                                        <h3>{t('product.apis_title')}</h3>
                                        <p>{t('product.apis_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>

    );
};

export default HomeProducts;
