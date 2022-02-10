import { Container } from "@mui/material";
import React from "react";
import CartTbl from "../../components/CartTbl";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";
import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <Navbar2 />
      <Container>
        <h3
          className="cart-tag
        "
        >
          Вы выбрали для покупки:
        </h3>
        <CartTbl />
      </Container>
      <Footer />
      <FooterLast />
    </div>
  );
};

export default CartPage;
