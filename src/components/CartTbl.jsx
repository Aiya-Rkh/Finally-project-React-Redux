import { DeleteForever } from "@mui/icons-material";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  changeCount,
  deleteClothesFromCart,
  getCart,
} from "../redux/actions/ClientAction";

export default function CartTbl() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.clothesClientReducer);

  React.useEffect(() => {
    dispatch(getCart());
    console.log(cart);
  }, []);

  if (!cart) {
    return <h2>Loading...</h2>;
  }
  console.log(cart);
  return (
    <Container sx={{ marginBottom: "250px" }}>
      <TableContainer className="cart1" component={Paper}>
        <Table
          sx={{ minWidth: 650, bgcolor: "snow" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Картинка</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right">Колличество</TableCell>
              <TableCell align="right">Сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.clothess.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {item.product.name}
                </TableCell> */}
                <TableCell align="right">
                  {<img width="100" src={item.product.image} alt="" />}
                </TableCell>
                <TableCell align="right">{item.product.price} сом</TableCell>
                <TableCell align="right">
                  {
                    <input
                      min="1"
                      onChange={(e) => {
                        if (e.target.value < 1) {
                          return;
                        }
                        dispatch(changeCount(e.target.value, item.product.id));
                      }}
                      type="number"
                      value={item.count}
                    />
                  }
                </TableCell>
                <TableCell align="right">{item.subPrice} сом</TableCell>
                {/* Стянуть новые данные обноаление после удаления*/}
                <Button
                  color="inherit"
                  sx={{ marginTop: "35px" }}
                  onClick={() =>
                    dispatch(deleteClothesFromCart(item.product.id))
                  }
                >
                  <DeleteForever />
                </Button>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <strong style={{ fontSize: 22 }}>Итоговая сумма:</strong>
              </TableCell>
              <TableCell colSpan={1} align="right">
                <strong style={{ fontSize: 22 }}>{cart.totalPrice} сом</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Link to="/tbot">
        <Button
          variant="outlined"
          color="warning"
          style={{ marginLeft: "40%", marginTop: "40px" }}
        >
          Оформить заказ
        </Button>
      </Link>
    </Container>
  );
}
