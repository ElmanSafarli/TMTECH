import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from "axios";
import { API } from "../../constant";
import { useTranslation } from 'react-i18next';

import Navbar from '../include/Navbar';
import Footer from '../include/Footer';

import ReactMarkdown from 'react-markdown'
// import Markdown from "react-markdown";
// import remarkGfm from 'remark-gfm'

import '../Parts/styles/products.css'

const Product = () => {

    const { slug } = useParams();
    const [error, setError] = useState(null);
    const { i18n } = useTranslation();

    const { t } = useTranslation();
    const [product, setProduct] = useState([]);
    const [headerImg, setHeaderImg] = useState([]);
    const [moreImg, setMoreImg] = useState([]);
    const [thirdImg, setThirdImg] = useState([]);
    const [fourthImg, setFourthImg] = useState([]);

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${API}/api/products/?populate=*&filters[slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data[0].attributes;
                    setProduct(attributes)
                    setHeaderImg(attributes.header_img?.data?.attributes?.url || "");
                    setMoreImg(attributes.reed_more_img?.data?.attributes?.url || "");
                    setThirdImg(attributes.third_img?.data?.attributes?.url || "");
                    setFourthImg(attributes.fourth_img?.data?.attributes?.url || "");
                } else {
                    setError("No data found for this slug.");
                    console.log(error);
                }
            })
            .catch((error) => setError(error));


    }, [error, i18n.language, slug]);


    return (
        <>
            <Navbar />
            <div className="product-info">
                {product.header_title && (
                    <div className="top">
                        <div className="left">
                            <h1>{product.header_title}</h1>
                            <ReactMarkdown>{product.header_text}</ReactMarkdown>
                        </div>
                        {headerImg && (
                            <div className="right">
                                <img src={API + headerImg} alt="product" />
                            </div>
                        )}
                    </div>
                )}
                {product.reed_more_title && (
                    <div className="more">
                        <div className="left">
                            <h1>{product.reed_more_title}</h1>
                            <ReactMarkdown>{product.reed_more_text}</ReactMarkdown>
                        </div>
                        {moreImg && (
                            <div className="right">
                                <img src={API + moreImg} alt="product" />
                            </div>
                        )}
                    </div>
                )}
                {product.third_title && (
                    <div className="more">
                        {thirdImg && (
                            <div className="right">
                                <img src={API + thirdImg} alt="product" />
                            </div>
                        )}
                        <div className="left">
                            <h1>{product.third_title}</h1>
                            <ReactMarkdown>{product.third_text}</ReactMarkdown>
                        </div>
                    </div>
                )}
                {product.fourth_title && (
                    <div className="more">
                        {fourthImg && (
                            <div className="right">
                                <img src={API + fourthImg} alt="product" />
                            </div>
                        )}
                        <div className="left">
                            <h1>{product.fourth_title}</h1>
                            <ReactMarkdown>{product.fourth_text}</ReactMarkdown>
                            <Link to="/contact" className="product-contact-link">{t('header.item_3')}</Link>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Product;
