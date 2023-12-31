// This component will create the card design used to list out the products

import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.images[0]} className="mainImg" />
        </div>
        <div className="price">
          <div className="title">
            <h2>{item.title}</h2>
          </div>
          <span>${item.price}</span>
        </div>
        <div className="rating">
          <span>Ratings: {item.rating}</span>
          <AddShoppingCartOutlinedIcon />
        </div>
      </div>
    </Link>
  );
};
