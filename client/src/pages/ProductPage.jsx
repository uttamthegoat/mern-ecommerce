import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/ProductPage/Product";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Product id={id} />
    </div>
  );
};

export default ProductPage;
