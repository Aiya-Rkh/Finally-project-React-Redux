import {
  AddCircleOutlined,
  AddShoppingCartRounded,
  CommentOutlined,
  Favorite,
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addClothesToCart,
  addClothesToFavorite,
  checkClothesInCart,
  checkClothesInFavorite,
  deleteClothesFromCart,
  deleteClothesFromFavorite,
} from "../redux/actions/ClientAction";

const Novinki = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  // const {  } =
  //   useSelector((state) => state.clothesClientReducer);

  return (
    <>
      <Card
        sx={{ minWidth: 280 }}
        style={{
          padding: 0,
          margin: 0,
          marginTop: "50px",
          height: "90%",
          position: "relative",
          // paddingBottom: "15px",
        }}
      >
        <CardMedia
          component="img"
          height="70%"
          image={props.item.image}
          alt=""
          className="image"
          style={{
            objectFit: "cover",
          }}
        />
        <CardContent>
          <hr />
          <br />
          <Typography variant="body1" color="black">
            {props.item.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justicyContent: "spaceAround" }}>
          {checkClothesInFavorite(props.item.id) ? (
            <Button
              onClick={() => dispatch(deleteClothesFromFavorite(props.item.id))}
              size="small"
              // variant="contained"
              color="warning"
              sx={{ marginLeft: "50px", bottom: "10px", position: "absolute" }}
            >
              <FavoriteOutlined />
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(addClothesToFavorite(props.item))}
              size="small"
              // variant="outlined"
              style={{
                marginLeft: "50px",
                bottom: "10px",
                position: "absolute",
              }}
              color="warning"
            >
              <FavoriteBorderOutlined />
            </Button>
          )}

          {checkClothesInCart(props.item.id) ? (
            <Button
              onClick={() => dispatch(deleteClothesFromCart(props.item.id))}
              size="small"
              // variant="contained"
              color="warning"
              sx={{
                marginLeft: "15px",
                bottom: "10px",
                position: "absolute",
              }}
            >
              <AddCircleOutlined />
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(addClothesToCart(props.item))}
              size="small"
              // variant="outlined"
              style={{
                marginLeft: "8px",
                bottom: "10px",
                position: "absolute",
              }}
              color="warning"
            >
              <AddShoppingCartRounded />
            </Button>
          )}
          <Link to={`/comment/${props.item.id}`}>
            <Button
              size="small"
              // variant="outlined"
              style={{
                marginLeft: "90px",
                bottom: "10px",
                position: "absolute",
              }}
              color="warning"
            >
              <CommentOutlined />
            </Button>
          </Link>

          <Typography
            comsponent="div"
            variant="h6"
            style={{
              marginLeft: "60%",
              position: "absolute",
              bottom: "10px",
              fontWeight: "bold",
            }}
          >
            {props.item.price} сом
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default Novinki;
