import React from "react";

const Product = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">$ {props.price}/-</p>
        <button className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
