import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";
import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";

const WomensPage = () => {
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
              <div className="sale-page1">
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
                          src="https://images.asos-media.com/products/prisborennoe-plate-mini-s-zavyazkoj-na-shee-rukavami-i-mramornym-printom-fioletovogo-tsveta-naanaa/201653062-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>ПЛАТЬЯ</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="https://images.asos-media.com/products/vila-smock-blouse-with-frill-detail-in-yellow/201574031-1-mellowyellow?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>ТОПЫ</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="https://images.asos-media.com/products/topshop-low-slung-organic-cotton-jean-in-checkerboard-print/201106747-1-multi?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>ДЖИНСЫ</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="https://images.asos-media.com/products/asos-design-hero-puffer-coat-with-detachable-sleeves-in-blue/200407323-1-blue?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>ПАЛЬТО И КУРТКИ</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="https://images.asos-media.com/products/topshop-co-ord-highwaisted-straight-leg-trouser-with-cord-patchwork-in-khaki-ecru/200822943-1-multi?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>БРЮКИ</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <img
                          src="https://images.asos-media.com/products/asos-design-open-stitch-jumper-in-cable/201359439-1-yellow?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                          alt=""
                        />
                        <p>ВЯЗАННЫЕ ВЕЩИ</p>
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
            </div>
            <div className="big-picture img-womens">
              {/* https://content.asos-media.com/-/media/homepages/ww/2022/jan/31/moment/with-design-treatment/ww_gl_asos-luxe_moment__870x1110.jpg */}
              <div className="div-img-women img-women2">
                <img
                  // className="img-relative"
                  src="https://content.asos-media.com/-/media/homepages/ww/2022/jan/31/moment/with-design-treatment/ww_gl_asos-luxe_moment__870x1110.jpg"
                  alt=""
                ></img>
                <h3>ASOS LUXE</h3>
                <h5>Приковывая взгляды</h5>
              </div>

              <div className="div-img-women">
                <img
                  src="https://content.asos-media.com/-/media/homepages/ww/2022/jan/31/moment/with-design-treatment/ww_gl_as-you_moment__870x1110.jpg"
                  alt=""
                />
                <h3>ASYOU</h3>
                <h5>В двух словах: нет слов...</h5>
              </div>
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

export default WomensPage;
