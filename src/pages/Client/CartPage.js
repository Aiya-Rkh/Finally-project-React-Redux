import { Container } from "@mui/material";
import React from "react";
import CartTbl from "../../components/CartTbl";

const CartPage = () => {
  return (
    <div>
      <Container>
        <h3
          className="cart-tag
        "
        >
          Вы выбрали для покупки
        </h3>
        <CartTbl />
      </Container>
    </div>
  );
};

export default CartPage;
