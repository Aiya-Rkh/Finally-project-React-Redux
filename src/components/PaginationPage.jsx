import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClothess } from "../redux/actions/ClientAction";

const PaginationPage = () => {
  const dispatch = useDispatch();
  const productsPerPage = 9;
  const { clothess } = useSelector((state) => state.clothesClientReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProductsCount = posts.length;
  // !куда передать его
  console.log(currentProducts);
  console.log(totalProductsCount, productsPerPage);
  const count = Math.ceil(totalProductsCount / productsPerPage);

  useEffect(() => {
    dispatch(getClothess);
  }, []);

  useEffect(() => {
    if (clothess) {
      setPosts(clothess);
    }
  }, [clothess]);

  return (
    <div className="pagination">
      <Pagination
        onChange={(_, value) => setCurrentPage(value)}
        count={count}
        variant="outlined"
        shape="rounded"
        sx={{ color: "red", marginBottom: "60px" }}
      />
    </div>
  );
};

export default PaginationPage;
