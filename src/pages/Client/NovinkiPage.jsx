import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Novinki from "../../components/Novinki";
import PaginationPage from "../../components/PaginationPage";
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

  useEffect(() => {
    dispatch(getClothess());
  }, []);

  if (!clothess) {
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
        <hr />
        <Filters />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {clothess.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              {/* props передаем под ключмо item в productcard*/}
              <Novinki item={item} />
            </Grid>
          ))}
        </Grid>
        <PaginationPage />
        {/* Пагинация */}
      </Container>
      <Footer />
      <FooterLast />
    </>
  );
};

export default NovinkiPage;
