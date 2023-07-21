// This page will load the details for each product selected

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./Product.scss";

export const Product = () => {
  const value = useParams().id;
  const id = parseInt(value);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://127.0.0.1:8000/product/${id}`);
        const data = await res.json();
        setRecords(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  console.log("records ", records);

  return (
    <div className="product">
      {loading ? (
        console.log("Loading...")
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={records.images[0]} onClick={(e) => setSelectedImg(0)} />
              <img src={records.images[1]} onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImg">
              <img src={records.images[selectedImg]} />
            </div>
          </div>
          <div className="right">
            <h1>{records.title}</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis vitae quod dicta repudiandae? Quaerat deleniti velit
              accusantium suscipit et, consectetur blanditiis, quia dignissimos
              illum nulla quisquam similique illo fuga iste!
            </p>
            <span>Price per unit</span>
            <div className="add">
              <h2>${records.price}</h2>
              <button>Buy Now</button>
              <AddShoppingCartOutlinedIcon />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
