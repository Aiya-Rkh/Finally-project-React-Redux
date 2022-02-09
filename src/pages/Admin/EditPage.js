import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  editClothes,
  saveEditedClothes,
} from "../../redux/actions/AdminAction";

const EditPage = () => {
  const dispacth = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { clothesToEdit } = useSelector(({ clothesReducer }) => clothesReducer);

  const [clothesEdit, setClothesEdit] = useState(clothesToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(saveEditedClothes(clothesEdit));
    for (const key in clothesEdit) {
      if (!clothesEdit[key]) {
        alert("Заполните поля");
        return;
      }
    }
    navigate("/admin");
  };

  useEffect(() => {
    setClothesEdit(clothesToEdit);
  }, [clothesToEdit]);
  console.log(clothesEdit);

  useEffect(() => {
    dispacth(editClothes(params.id));
  }, []);

  // saveEditedClothes(clothesEdit);

  // const handlesubmit = (e) => {
  // e.preventDefault();
  // // !проверка на пустоту

  // }

  if (!clothesEdit) {
    return <h3>-/-/-/-</h3>;
  }

  // ! тут в инпуты-таблицы вставить данные для редактирования
  return (
    // <div>
    //   <h3>Edit Page</h3>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={clothesEdit.name}
    //       onChange={(e) =>
    //         setClothesEdit({ ...clothesEdit, name: e.target.value })
    //       }
    //     />
    //     <input
    //       type="text"
    //       value={clothesEdit.lastName}
    //       onChange={(e) =>
    //         setClothesEdit({ ...clothesEdit, lastName: e.target.value })
    //       }
    //     />
    //     <input
    //       type="text"
    //       value={clothesEdit.phoneNumber}
    //       onChange={(e) =>
    //         setClothesEdit({ ...clothesEdit, phoneNumber: e.target.value })
    //       }
    //     />
    //     <button type="submit">Сохранить</button>
    //   </form>

    //   {/* //   value={clothesState.name}
    // //       onChange={(e)=>setClothesState({...clothesState,name: e.target.value})} */}
    // </div>
    <div className="firts-div-admin">
      <div className="add-edit-page">
        <Container
          style={{
            backgroundColor: "snow",
            display: "flex",
            justifyContent: "center",
            marginTop: "130px",
            width: "700px",
            borderRadius: 5,
            padding: "20px",
          }}
        >
          <form
            style={{
              width: "600px",
            }}
            onSubmit={handleSubmit}
          >
            <h3
              style={{
                textAlign: "center",
                padding: "20px ",
                fontSize: "25px",
                fontStyle: "italic",
              }}
            >
              Редактировать товар
            </h3>

            <TextField
              value={clothesEdit.description}
              onChange={(e) =>
                setClothesEdit({ ...clothesEdit, description: e.target.value })
              }
              label="Описание"
              variant="outlined"
              color="warning"
            ></TextField>

            <TextField
              value={clothesEdit.price}
              onChange={(e) =>
                setClothesEdit({ ...clothesEdit, price: +e.target.value })
              }
              label="Стоимость товара"
              variant="outlined"
              type="number"
              color="warning"
            ></TextField>

            <TextField
              value={clothesEdit.image}
              onChange={(e) =>
                setClothesEdit({ ...clothesEdit, image: e.target.value })
              }
              label="Картинка"
              variant="outlined"
              color="warning"
            ></TextField>

            <Button
              variant="contained"
              type="submit"
              color="warning"
              sx={{
                bgcolor: "darkorange",
                marginLeft: "28%",
                width: "270px",
                borderRadius: 5,
              }}
            >
              Сохранить изменения
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default EditPage;
