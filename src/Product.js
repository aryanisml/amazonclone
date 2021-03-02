import React from "react";
import "./Product.css";
const Product = ({ id, name, image, description, regularPrice }) => {
  return (
    <>
      {/* {Array(5)
        .fill()
        .map(() => (
          <p>STAR</p>
        ))} */}
      <div className="product">
        <div className="product__info">
          <p>{name}</p>
          <div className="product__price">
            <small>$</small>
            <strong>{regularPrice}</strong>
          </div>
        </div>
        <img src={image} />
        <button>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;
