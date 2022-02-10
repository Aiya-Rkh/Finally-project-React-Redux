import React from "react";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import Navbar from "../../components/Navbar";
import OrderForm from "../../components/OrderForm";
import { Container } from "@mui/material";
import FooterLast from "../../components/FooterLast";
import Footer from "../../components/Footer";

const FormPage = () => {
  return (
    <>
      <Navbar />
      <Navbar1 />
      <Navbar2 />
      <Container>
        <OrderForm />
      </Container>
      <Footer />
      <FooterLast />
    </>
  );
};

export default FormPage;
