import React, { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./Product.scss";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6045051/pexels-photo-6045051.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          vitae quod dicta repudiandae? Quaerat deleniti velit accusantium
          suscipit et, consectetur blanditiis, quia dignissimos illum nulla
          quisquam similique illo fuga iste!
        </p>
        <span>Price per unit</span>
        <div className="add">
          <h2>Price</h2>
          <button>Buy Now</button>
          <AddShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
