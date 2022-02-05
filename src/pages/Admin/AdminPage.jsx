// !функцию Админ пейжа расписать здесь!
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

import {
  DeleteForeverRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";

import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteClothes, getClothes } from "../../redux/actions/AdminAction";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { clothes } = useSelector((state) => state.clothesReducer);

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  if (!clothes) {
    return <h3>Loading</h3>;
  }

  // ! тут мы вставляем в таблицу данные,перебираем с map - clothes ,и кнопку удаления и редактирования

  return (
    <TableContainer
      // component={Paper}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "100px 0 220px",
        borderRadius: 5,
      }}
    >
      <Table sx={{ bgcolor: "snow" }} aria-label="simple table">
        {/* <TableHead>
          <TableRow sx={{ bgcolor: "whitesmoke" }}>
            <TableCell>Название</TableCell>
            <TableCell align="right">Картинка</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Состав</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {clothes.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                <img width={80} src={item.image} alt="product-img" />
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>

              <TableCell align="right">{item.description}</TableCell>
              <TableCell>
                <Link to={`/admin-panel/edit/${item.id}`}>
                  <Button variant="outlined" color="warning">
                    <ModeEditOutlineRounded />
                  </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => dispatch(deleteClothes(item.id))}
                >
                  <DeleteForeverRounded />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPage;
