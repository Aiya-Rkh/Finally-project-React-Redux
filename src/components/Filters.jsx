import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClothess } from "../redux/actions/ClientAction";

const Filters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = new URLSearchParams(window.location.search);
  const [categoryValue, setCategoryValue] = useState(
    search.get("category") || ""
  );
  const [priceValue, setPriceValue] = useState(search.get("price_lte") || "");

  const filterClothes = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setCategoryValue(search.get("category") || "");
    setPriceValue(search.get("price_lte") || "");
    dispatch(getClothess());
  };

  const resetFilter = () => {
    navigate("/new");
    setCategoryValue("");
    setPriceValue("");
    dispatch(getClothess());
  };

  return (
    <Container>
      <div className="filters">
        <div>
          <FormControl style={{ color: "black", marginLeft: "30%" }}>
            <InputLabel id="select">Категория</InputLabel>
            <Select
              className="select"
              value={categoryValue}
              onChange={(e) => filterClothes("category", e.target.value)}
              labelId="select"
              label="Категория"
            >
              <MenuItem value="dress">Платья</MenuItem>
              <MenuItem value="t-shirts">Футболка,топ</MenuItem>
              <MenuItem value="jackets">Куртки</MenuItem>
              <MenuItem value="shoes">Обувь</MenuItem>
              <div>
                <Button
                  onClick={resetFilter}
                  variant="contained"
                  color="inherit"
                >
                  очистить
                </Button>
              </div>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl style={{ marginLeft: "25%" }}>
            <InputLabel id="select">Стоимость</InputLabel>
            <Select label="Стоимость">
              <Slider
                className="slider"
                min={1000}
                max={7000}
                step={100}
                value={priceValue}
                onChange={(e) => filterClothes("price_lte", e.target.value)}
                valueLabelDisplay="auto"
                style={{ color: "black" }}
              />
              <Button onClick={resetFilter} variant="contained" color="inherit">
                очистить
              </Button>
            </Select>
          </FormControl>
        </div>
      </div>
    </Container>
  );
};

export default Filters;
