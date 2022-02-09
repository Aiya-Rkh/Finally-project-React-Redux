import { AddShoppingCart, DeleteForever } from "@mui/icons-material";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addClothesToCart,
  deleteClothesFromFavorite,
  getFavorite,
} from "../redux/actions/ClientAction";

export default function Favorite() {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.clothesClientReducer);

  React.useEffect(() => {
    dispatch(getFavorite());
  }, []);

  if (!favorite) {
    return <h2>Loading...</h2>;
  }
  console.log(favorite);
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
              <TableCell align="right">Описание</TableCell>
              <TableCell align="right">Цена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorite.clothess.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  {<img width="100" src={item.product.image} alt="" />}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.product.description}
                </TableCell>
                <TableCell align="right">{item.product.price} сом</TableCell>
                {/* Стянуть новые данные обноаление после удаления*/}
                <Button
                  color="error"
                  sx={{ marginTop: "35px" }}
                  onClick={() => dispatch(addClothesToCart(item.product))}
                >
                  <AddShoppingCart />
                </Button>
                <Button
                  color="inherit"
                  sx={{ marginTop: "35px" }}
                  onClick={() =>
                    dispatch(deleteClothesFromFavorite(item.product.id))
                  }
                >
                  <DeleteForever />
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/cart-page">
        <Button
          variant="outlined"
          color="warning"
          style={{ marginLeft: "40%", marginTop: "40px" }}
        >
          Перейти в корзину
        </Button>
      </Link>
    </Container>
  );
}
