// !функцию Админ пейжа расписать здесь!
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Container,
  TableHead,
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
import { deleteClothes } from "../../redux/actions/AdminAction";
import { getClothess } from "../../redux/actions/ClientAction";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { clothess } = useSelector((state) => state.clothesClientReducer);

  useEffect(() => {
    dispatch(getClothess());
  }, []);

  if (!clothess) {
    return <h3>Loading</h3>;
  }

  // ! тут мы вставляем в таблицу данные,перебираем с map - clothes ,и кнопку удаления и редактирования

  return (
    <div className="firts-div-admin">
      <Container>
        <div className="welcome">
          <h3>Добро Пожаловать в Административную часть!!!</h3>
          <Link to="/add">
            <Button variant="outlined" color="warning">
              ДОБАВИТЬ НОВЫЙ ТОВАР
            </Button>
          </Link>
        </div>
        <TableContainer
          // component={Paper}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0 220px",
            borderRadius: 5,
          }}
        >
          <Table sx={{ bgcolor: "snow" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "whitesmoke" }}>
                <TableCell align="right">Картинка</TableCell>
                <TableCell align="right">Описание</TableCell>
                <TableCell align="right">Стоимость</TableCell>
                <TableCell>Изменить</TableCell>
                <TableCell>Удалить</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clothess.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <img width={80} src={item.image} alt="clothes-img" />
                  </TableCell>
                  <TableCell align="right">{item.description}</TableCell>

                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell>
                    <Link to={`/edit${item.id}`}>
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
      </Container>
    </div>
  );
};

export default AdminPage;
