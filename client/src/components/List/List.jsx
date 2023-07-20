// Using the card component to list out all the products

import React from "react";
import { Card } from "../Card/Card";
import "./List.scss";

export const List = () => {
  // loading dummy data
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Couch",
      price: "5,000",
      rating: "4/5",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/8092365/pexels-photo-8092365.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Desk",
      price: "3,000",
      rating: "5/5",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Chair",
      price: "1,000",
      rating: "3/5",
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
