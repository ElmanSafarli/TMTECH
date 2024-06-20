
import React, { useEffect, useState } from 'react';
import Navbar from '../include/Navbar';
import HomeContact from '../Parts/Home_contact';
import Footer from '../include/Footer';

import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';

import '../Parts/styles/resources.css'

import { API } from '../../constant';

const ArticleDetail = () => {
    const { slug } = useParams();

    const [error, setError] = useState(null);
    const [article, setArticle] = useState([]);
    const [articlesImg, setArticlesImg] = useState([]);
    const server = API;

    const { t, i18n } = useTranslation();

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();
        axios.get(`${server}/api/resources?populate=*&filters[slug]=${slug}&locale=${locale}`)
            .then((response) => {
                if (response.data && response.data.data) {

                    const attributes = response.data.data[0].attributes;
                    setArticle(attributes);

                    const imageUrls = attributes.map(city => {
                        if (city.attributes.bg_img && city.attributes.bg_img.data) {
                            return city.attributes.bg_img.data.attributes.url;
                        } else {
                            return null;
                        }
                    });
                    setArticlesImg(imageUrls);
                } else {
                    setError("Data structure from API is not as expected.");
                    console.log(error)
                }
            })
            .catch((error) => setError(error));


    }, [error, server, i18n.language]);

    console.log(article)

    return (
        <>
            <Navbar />

            <div className="">
                {article.name}
            </div>
            <HomeContact />
            <Footer />
        </>
    );
};

export default ArticleDetail;
