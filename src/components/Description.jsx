import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "~/context/ProductContext";

const Description = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products?.find((product) => product.id === productId);
  return (
    <div className="description-container">
      <div className="box">
        <h1>Mô tả sản phẩm</h1>
        <p>{product?.data.description}</p>
      </div>
    </div>
  );
};

export default Description;
