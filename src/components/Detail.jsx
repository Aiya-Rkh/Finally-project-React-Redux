import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../redux/actions/ClientAction";

const Detail = () => {
  // ! стягиваем id в адресной строке
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.clothesClientReducer);

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, []);

  if (!detail) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        {/* <Link to="/">Назад</Link> */}
        <Button onClick={() => navigate(-1)} variant="text">
          Назад
        </Button>
        <div className="detail-page">
          <div className="detail-left-img">
            <img style={{ width: "30%" }} src={detail.image} alt="detail" />
          </div>
          <div className="detail-right">
            <li>
              Цена: <strong>{detail.price}</strong>
            </li>
            <li>
              Описание: <strong>{detail.description}</strong>
            </li>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
