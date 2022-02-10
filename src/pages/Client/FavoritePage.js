import React from "react";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import Navbar from "../../components/Navbar";
import Favorite from "../../components/Favorite";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";

const FavoritePage = () => {
  return (
    <>
      <Navbar />
      <Navbar1 />
      <Navbar2 />
      <Favorite />
      <Footer />
      <FooterLast />
    </>
  );
};

export default FavoritePage;
