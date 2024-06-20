
import React, { useEffect, useState } from 'react';
import Navbar from '../include/Navbar';
import HomeContact from '../Parts/Home_contact';
import Footer from '../include/Footer';

import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';

import '../Parts/styles/resources.css'

import { API } from '../../constant';
import FeaturedArticles from '../Parts/FeaturedArticles';

const Resources = () => {

    const [error, setError] = useState(null);
    const [featuredArticles, setFeaturedArticles] = useState([]);
    const [llArticles, setllArticles] = useState([]);
    const [lrArticles, setlrArticles] = useState([]);
    const [articlesImg, setArticlesImg] = useState([]);
    const server = API;

    const { i18n } = useTranslation();

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();
        axios.get(`${server}/api/resources?populate=*&locale=${locale}`)
            .then((response) => {
                if (response.data && response.data.data) {

                    const attributes = response.data.data;
                    const filteredArticles = attributes.filter(article => article.attributes.choose === 'Featured');
                    const filteredLatestLeftArticles = attributes.filter(article => article.attributes.choose === 'Latest Left');
                    const filteredLatestRightArticles = attributes.filter(article => article.attributes.choose === 'Latest Right');
                    setFeaturedArticles(filteredArticles);
                    setllArticles(filteredLatestLeftArticles)
                    setlrArticles(filteredLatestRightArticles)
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


    const truncateText = (text, charLimit) => {
        if (text.length <= charLimit) return text;
        return text.slice(0, charLimit) + '...';
    };

    return (
        <>
            <Navbar />
            <div className="articles-page">
                <h1>Featured</h1>

                <FeaturedArticles
                    articles={featuredArticles}
                    server={server}
                    articlesImg={articlesImg}
                    truncateText={truncateText}
                />

                <div class="articles-middle">

                    <div class="articles-middle-group">

                        <div class="articles-middle-l">

                            {llArticles && llArticles.length > 0 ? (
                                llArticles.map(({ id, attributes }, index) => {
                                    return (

                                        <Link to={`/article/${attributes.slug}`} key={id}>
                                            <div class="box">
                                                <div class="image">
                                                    <img src={server + articlesImg[index]} alt="Article" />
                                                </div>
                                                <div class="title">{attributes.name}</div>
                                                <div class="text">{truncateText(attributes.slogan, 240)}</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            ) : (
                                <></>
                            )}
                        </div>

                        <div class="articles-middle-r">



                            {lrArticles && lrArticles.length > 0 ? (
                                lrArticles.map(({ id, attributes }, index) => {
                                    return (

                                        <Link to={`/article/${attributes.slug}`} key={id}>
                                            <div class="box">
                                                <div class="image">
                                                    <img src={server + articlesImg[index]} alt="Article" />
                                                </div>
                                                <div class="info">
                                                    <div class="title">{attributes.name}</div>
                                                    <div class="data">{truncateText(attributes.slogan, 100)}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            ) : (
                                <></>
                            )}

                        </div>
                    </div>
                </div>

            </div>
            <HomeContact />
            <Footer />
        </>
    );
};

export default Resources;
