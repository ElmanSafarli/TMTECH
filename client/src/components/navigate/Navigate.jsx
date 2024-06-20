import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"

// Components
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
// import Developers from '../Pages/Developer'
import Loader from '../include/Loader'
import ScrollToTop from '../include/ScrollToTop';
// import Docs from '../Pages/Docs'
// import Resources from '../Pages/Resources'
import ArticleDetail from '../Pages/ArticleDetail'
import Product from '../Pages/Product'
import About from '../Pages/AboutUs'

const Navigate = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
        };

        loadData();
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/article/:slug" element={<ArticleDetail />} />
                {/* <Route path="/developers" element={<Developers />} /> */}
                {/* <Route path="/documentation" element={<Docs />} /> */}
                {/* <Route path="/resources" element={<Resources />} /> */}
                <Route path="/article/:slug" element={<ArticleDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:slug" element={<Product />} />
            </Routes>
        </>

    );
};

export default Navigate;