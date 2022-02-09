import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";
import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";

const MainPage = () => {
  return (
    <>
      <div className="ok">
        <Navbar />
        <Navbar1 />
        <Navbar2 />
        <div className="fiolet-bgc">
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
              <div className="sale-carousel">
                <ul className="carousel-list">
                  {/* <img
                      className="icons"
                      src="https://cdn-icons-png.flaticon.com/128/860/860790.png"
                      alt=""
                    /> */}
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/asos-design-oversized-cord-western-jacket-with-borg-lining-and-collar-in-rust/200466027-1-orange?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>КУРТКИ И ПАЛЬТО</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/collusion-x014-extreme-90s-baggy-jeans-in-00s-wash/201028212-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>ДЖИНСЫ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/puma-suede-sneakers-in-light-blue-and-off-white-exclusive-to-asos/201236650-1-lightblue?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>ОБУВЬ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/asos-design-smiley-boxy-oversized-shirt-in-spray-paint-print/200950144-2?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>РУБАШКИ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/asos-design-high-waist-slim-wool-mix-smart-pants-in-green-check/23774023-1-green?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>БРЮКИ</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://images.asos-media.com/products/nike-basketball-sustainability-t-shirt-in-off-white/23540282-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                        alt=""
                      />
                      <p>ФУТБОЛКИ И МАЙКИ</p>
                    </Link>
                  </li>
                  {/* <img
                      className="icons"
                      src="https://cdn-icons-png.flaticon.com/128/130/130884.png"
                      alt=""
                    /> */}
                </ul>
                <Link to="">
                  <div className="btn-bay">
                    <button>
                      <h3>КУПИТЬ</h3>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="big-picture">
              <img
                className="img-relative"
                src="https://content.asos-media.com/-/media/homepages/mw/2022/jan/31/mw-gl-wedding-retouched/desktop.png"
                alt=""
              ></img>
            </div>
            <Link to="">
              <div className="btn-bay-pink">
                <button>
                  <h3>ПЕРЕЙТИ</h3>
                </button>
              </div>
            </Link>
            <div className="brands">
              <p>МОДНЫЕ БРЕНДЫ</p>
              <div className="img-brands">
                <img
                  src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/tommy-hilfiger-hp-logos-256x256.jpg"
                  alt=""
                />
                <img
                  src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/north-face.png"
                  alt=""
                />
                <img
                  src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/nike-hp-logos-256x256.jpg"
                  alt=""
                />
                <img
                  src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg"
                  alt=""
                />
                <img
                  src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg"
                  alt=""
                />
              </div>
            </div>
          </Container>
          <Footer />
          <FooterLast />
        </div>
      </div>
    </>
  );
};

export default MainPage;
