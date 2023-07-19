import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Couch",
      price: "5,000",
      rating: "4/5",
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
        <h3>$123</h3>
      </div>
      <button>Checkout</button>
    </div>
  );
};
