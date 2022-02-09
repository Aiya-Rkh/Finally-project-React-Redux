import { CheckCircle } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClothesToBot } from "../redux/actions/ClientAction";
// import Footer from "./Footer";

const OrderForm = () => {
  //   const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.clothesClientReducer);
  const navigate = useNavigate();

  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    address: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // ! Проверка на пустоту
    for (let key in info) {
      if (!info[key]) {
        alert("Заполните поля!!!");
        return;
      }
    }
    getClothesToBot(info, cart);
    // ! Очищаем инпуты
    setInfo({
      name: "",
      email: "",
      address: "",
    });

    navigate("/tBot");
  };

  if (!cart) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Container
        sx={{
          bgcolor: "snow",
          marginTop: "130px",
          borderRadius: 5,
          width: "700px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
          onSubmit={handleSubmit}
        >
          <h3
            style={{
              color: "black",
              padding: "25px",
              textAlign: "center",
            }}
          >
            Введите данные:
          </h3>

          <TextField
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            value={info.name}
            variant="outlined"
            color="info"
            placeholder="Ваше имя"
          />

          <TextField
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            value={info.email}
            // required
            placeholder="Email-почта"
            type="email"
          />

          <TextField
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
            value={info.address}
            required
            placeholder="Ваш адрес"
            type="text"
          />
          <div style={{ padding: "20px", textAlign: "center" }}>
            <strong>Cумма к оплате: {cart.totalPrice}сом</strong>
          </div>
        </form>
        <Button
          sx={{ marginLeft: "40%" }}
          variant="outlined"
          type="submit"
          color="warning"
          onClick={handleSubmit}
        >
          <CheckCircle />
          Подтвердить
        </Button>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default OrderForm;
