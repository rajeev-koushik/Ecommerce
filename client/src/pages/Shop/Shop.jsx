// This page will list all the products available on the site

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Shop.scss";
import { List } from "../../components/List/List";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="left">
        <span>FILTER BY</span>
        <div className="filterItem">
          <h2>
            Collection
            <KeyboardArrowDownIcon />
          </h2>
          <h2>
            Color
            <KeyboardArrowDownIcon />
          </h2>
          <h2>
            Category
            <KeyboardArrowDownIcon />
          </h2>
          <h2>Price Range</h2>
          <div className="inputItem">
            <span>$0</span>
            <input type="range" min={0} max={100} />
            <span>$10,000+</span>
          </div>
        </div>
      </div>
      <div className="right">
        <List />
      </div>
    </div>
  );
};
