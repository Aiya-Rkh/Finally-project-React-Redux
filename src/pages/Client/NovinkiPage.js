import { Container, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Novinki from "../../components/Novinki";
import { getClothess } from "../../redux/actions/ClientAction";

import Navbar from "../../components/Navbar";
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import FooterLast from "../../components/FooterLast";
import Filters from "../../components/Filters";

const NovinkiPage = () => {
  const dispatch = useDispatch();
  const { clothess } = useSelector((state) => state.clothesClientReducer);

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const indexOfLastProduct = currentPage * productsPerPage; //?1*8
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //?8-8
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct); //?0.8
  const totalProductsCount = posts.length; //?21
  // !куда передать его
  console.log(currentProducts);
  const count = Math.ceil(totalProductsCount / productsPerPage); //?21/8=3

  useEffect(() => {
    dispatch(getClothess());
  }, []);

  useEffect(() => {
    if (clothess) {
      setPosts(clothess);
    }
  }, [clothess]);

  if (!currentProducts) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <Navbar />
      <Navbar1 />
      <Navbar2 />

      {/* Тут будет фильтрация */}
      <Container maxWidth="lg">
        <h3 className="novinki-tag">Новинки для женщин</h3>
        <p className="novinki-tag-p">
          Хочешь держать руку на пульсе моды? Изучи нашу подборку, в которой
          нашли отражение все новейшие тренды. У нас есть последние модели от
          наших любимых брендов, включая базовые повседневные вещи.
        </p>

        <Filters />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {currentProducts.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              {/* props передаем под ключмо item в productcard*/}
              <Novinki item={item} />
            </Grid>
          ))}
        </Grid>
        <div className="pagination">
          <Pagination
            onChange={(_, value) => setCurrentPage(value)}
            count={count}
            variant="outlined"
            shape="rounded"
            sx={{ color: "red", marginBottom: "60px", marginLeft: "40%" }}
          />
        </div>
        {/* Пагинация */}
      </Container>
      <Footer />
      <FooterLast />
    </>
  );
};

export default NovinkiPage;
