import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <>
      {Array(5)
        .fill()
        .map(() => (
          <p>STAR</p>
        ))}
    </>
  );
};

export default Product;
