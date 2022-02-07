import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Novinki = (props) => {
  return (
    <>
      <Card
        sx={{ minWidth: 280 }}
        style={{
          padding: 0,
          margin: 0,
          marginTop: "50px",
          height: "80%",
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
          {/* {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            size="small"
            variant="contained"
            color="error"
            sx={{ marginLeft: "15px", bottom: "10px", position: "absolute" }}
          >
            <AddShoppingCartRounded />
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            size="small"
            variant="outlined"
            style={{ marginLeft: "15px", bottom: "10px", position: "absolute" }}
            color="error"
          >
            <AddShoppingCartRounded />
          </Button>
        )} */}

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
