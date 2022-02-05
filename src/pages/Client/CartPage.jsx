import { Container } from "@mui/material";
import React from "react";
import CartTbl from "../../components/CartTbl";

const CartPage = () => {
  return (
    <div>
      <Container>
        <h2>Cart page</h2>
      </Container>
      <CartTbl />
    </div>
  );
};

export default CartPage;
