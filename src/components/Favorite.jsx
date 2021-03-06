import {
  AddShoppingCart,
  ArrowBackIosOutlined,
  DeleteForever,
} from "@mui/icons-material";
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
import { Link, useNavigate } from "react-router-dom";

import {
  addClothesToCart,
  deleteClothesFromFavorite,
  getFavorite,
} from "../redux/actions/ClientAction";

export default function Favorite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <h3 style={{ margin: "40px", textAlign: "center", fontSize: "24px" }}>
        Избранное
      </h3>
      <Button onClick={() => navigate(-1)} variant="text" color="inherit">
        <ArrowBackIosOutlined />
        Назад
      </Button>
      <TableContainer className="cart1" component={Paper}>
        <Table
          style={{ minWidth: 650, backgroundColor: "ThreeDHighlight" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "ThreeDFace" }}>
              <TableCell align="right">Картинка</TableCell>
              <TableCell align="right">Описание</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right"></TableCell>
              {/* <TableCell align="right">Удалить</TableCell> */}
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

                <TableCell align="right">{item.product.description}</TableCell>
                <TableCell align="right">{item.product.price} сом</TableCell>
                {/* Стянуть новые данные обноаление после удаления*/}
                <Button
                  color="error"
                  sx={{ marginTop: "28%" }}
                  onClick={() => dispatch(addClothesToCart(item.product))}
                >
                  <AddShoppingCart />
                </Button>
                <Button
                  color="inherit"
                  sx={{ marginTop: "28%", width: "40%" }}
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
