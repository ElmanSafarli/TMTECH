import React from 'react';
import { Link } from "react-router-dom";

const FeaturedArticles = ({ articles, server, articlesImg, truncateText }) => {
    return (
        <div className="articles-top">
            {articles && articles.length > 0 ? (
                articles.map(({ id, attributes }, index) => {
                    return (
                        <div className="content" key={id}>
                            <Link to={`/article/${attributes.slug}`}>
                                <div className="box">
                                    <img src={server + articlesImg[index]} alt="article" />
                                    <div className="info">
                                        <div className="title">{attributes.name} </div>
                                        <div className="text">{truncateText(attributes.slogan, 100)}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
};

export default FeaturedArticles;
