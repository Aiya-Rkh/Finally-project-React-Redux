import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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

  const filterClothes = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setCategoryValue(search.get("category") || "");
    dispatch(getClothess());
  };

  return (
    <Container>
      <div>
        <FormControl fullWidth>
          <InputLabel id="select">Категория</InputLabel>
          <Select
            value={categoryValue}
            onChange={(e) => filterClothes("category", e.target.value)}
            labelId="select"
            label="КАТЕГОРИЯ"
          >
            <MenuItem value="">Категория</MenuItem>
            <MenuItem value="dress">Платья</MenuItem>
            <MenuItem value="t-shirts">Футболка,топ</MenuItem>
            <MenuItem value="jackets">Куртки</MenuItem>
            <MenuItem value="shoes">Обувь</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Container>
  );
};

export default Filters;
