import React from "react";
import Comment from "../../components/Comment";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";
import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import ShowComment from "../../components/ShowComment";

const CommentPage = () => {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <Navbar2 />
      <Detail />
      <Comment />
      <ShowComment />
      <Footer />
      <FooterLast />
    </div>
  );
};

export default CommentPage;
