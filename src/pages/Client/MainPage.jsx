import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import { deleteClothes, getClothes } from "../../redux/actions/AdminAction";

const MainPage = () => {
  const dispacth = useDispatch();
  const { clothes } = useSelector((state) => state.clothesReducer);
  console.log(clothes);

  const handleSubmit = (id) => {
    dispacth(deleteClothes(id));
  };

  useEffect(() => {
    dispacth(getClothes());
  }, []);

  if (!clothes) {
    return <h3>Loading</h3>;
  }

  // !внутри вставить таблицу перебрать и подставить item

  return (
    <div className="ok">
      <Navbar />
      <Navbar1 />
      <Navbar2 />
      <Container className="okk">
        <div className="final-text">
          <h2>
            <span className="text">
              БОЛЬШАЯ ИТОГОВАЯ РАСПРОДАЖА!
              <br />
              ОГРОМНАЯ!
              <br />
              СКИДКИ ДО 80%!
              <br />
              ФИНАЛИМ СКИДКИ
            </span>
          </h2>
        </div>
        <div className="sale-page">
          <div className="sale-page1">
            {/* <div className="sale-button"></div> */}
            <div className="sale-carousel">
              {/* <button>"==="</button> */}
              <ul className="carousel-list">
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/asos-design-oversized-cord-western-jacket-with-borg-lining-and-collar-in-rust/200466027-1-orange?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>КУРТКИ И ПАЛЬТО</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/collusion-x014-extreme-90s-baggy-jeans-in-00s-wash/201028212-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>ДЖИНСЫ</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/puma-suede-sneakers-in-light-blue-and-off-white-exclusive-to-asos/201236650-1-lightblue?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>ОБУВЬ</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/asos-design-smiley-boxy-oversized-shirt-in-spray-paint-print/200950144-2?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>РУБАШКИ</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/asos-design-high-waist-slim-wool-mix-smart-pants-in-green-check/23774023-1-green?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>БРЮКИ</span>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="https://images.asos-media.com/products/nike-basketball-sustainability-t-shirt-in-off-white/23540282-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                      alt=""
                    />
                    <span>ФУТБОЛКИ И МАЙКИ</span>
                  </Link>
                </li>
              </ul>
              {/* <button>"==="</button> */}
            </div>
            {/* <div className="sale-button">
              <button>"==="</button>
            </div> */}
          </div>
        </div>

        {/* <img
          src="https://oir.mobi/uploads/posts/2021-03/1616605206_13-p-svetlo-biryuzovii-fon-15.jpg"
          alt=""
        /> */}
        {/* <ul>
          {clothes.map((item) => (
            <li key={item.id}>
              {item.name}
              {item.lastName}
              {item.phoneNumber}
              <button onClick={() => handleSubmit(item.id)}>DELETE</button>
              <Link to={`/edit/${item.id}`}>
                <button>EDIT</button>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/add">
          <h3>Add Page</h3>
        </Link> */}

        {/* {item.id}...
      <button onClick={() => handleSubmit(item.id)}>delete</button>
      <Link to="/edit">
        <button>edit</button>
      </Link> */}
      </Container>
    </div>
  );
};

export default MainPage;
