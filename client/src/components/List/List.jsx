// Using the card component to list out all the products

import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./List.scss";

export const List = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/shop")
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("data ", records);

  return (
    <div className="list">
      {records?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
