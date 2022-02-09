import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addClothes } from "../../redux/actions/AdminAction";

const initClothes = {
  description: "",
  price: "",
  image: "",
};

const AddPage = () => {
  const dispacth = useDispatch();
  const [newClothes, setNewClothes] = useState(initClothes);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(addClothes(newClothes));
    setNewClothes(initClothes);
  };

  // ! тут в инпутах прописать value and onClick
  return (
    // <div>
    //   <h3>AddPage</h3>
    //   <Link to="/">
    //     <h3>Main Page</h3>
    //   </Link>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       value={clothes.name}
    //       onChange={(e) => {
    //         setClothes({ ...clothes, name: e.target.value });
    //       }}
    //       type="text"
    //       placeholder="Name"
    //     />
    //     <input
    //       value={clothes.lastName}
    //       onChange={(e) => setClothes({ ...clothes, lastName: e.target.value })}
    //       type="text"
    //       placeholder="Last Name"
    //     />
    //     <input
    //       value={clothes.phoneNumber}
    //       onChange={(e) =>
    //         setClothes({ ...clothes, phoneNumber: e.target.value })
    //       }
    //       type="number"
    //       placeholder="PhoneNumber"
    //     />
    //     <button type="submit">OK</button>
    //   </form>

    //   {/* value={clothes.name}...
    //   onChange={(e)=>setClothes({...clothes,name: e.target.value})} */}
    // </div>

    <div className="firts-div-admin">
      <div className="add-edit-page">
        <Container
          style={{
            backgroundColor: "snow",
            marginTop: "130px",
            borderRadius: "5px",
            width: "700px",
            padding: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h3
              style={{
                color: "black",
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "25px",
                width: "600px",
                fontStyle: "italic",
              }}
            >
              Добавить новый товар:
            </h3>

            <TextField
              value={newClothes.description}
              onChange={(e) =>
                setNewClothes({ ...newClothes, description: e.target.value })
              }
              label="Описание"
              variant="outlined"
              color="warning"
            />

            <TextField
              value={newClothes.price}
              onChange={(e) => {
                if (!Number.isInteger(+e.target.value)) return;
                setNewClothes({
                  ...newClothes,
                  price: +e.target.value,
                });
              }}
              label="Стоимость товара"
              variant="outlined"
              color="warning"
            />

            <TextField
              value={newClothes.image}
              onChange={(e) =>
                setNewClothes({ ...newClothes, image: e.target.value })
              }
              label="Картинка"
              variant="outlined"
              color="warning"
            />

            <Button
              color="warning"
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "orangered",
                marginLeft: "28%",
                width: "270px",
                borderRadius: 5,
                // display: "felx",
                // justifyContent: "center",
              }}
            >
              Добавить
            </Button>
          </form>
        </Container>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default AddPage;
