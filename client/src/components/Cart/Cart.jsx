// Implementing the shopping cart feature

import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export const Cart = () => {
  // loading dummy data
  const data = [
    {
      id: 1,
      title: "Couch",
      price: "5,000",
    },
  ];

  return (
    <div className="cart">
      <h1>Products in cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <div className="details">
            <h2>{item.title}</h2>
            <div className="price">${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <h3>TOTAL</h3>
        <h3>${item.price}</h3>
      </div>
      <button>Checkout</button>
    </div>
  );
};
