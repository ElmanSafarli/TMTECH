import React from "react";
import HomeHeaderTop from "../Parts/Home_header_top";
import HomeProducts from "../Parts/Home_products";
// import HomeAbout from "../Parts/Home_about";
import Footer from "../include/Footer";
import HomeContact from "../Parts/Home_contact";

const Home = () => {
  return (
    <>
      <HomeHeaderTop />
      <HomeProducts />
      {/* <HomeAbout /> */}
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;
