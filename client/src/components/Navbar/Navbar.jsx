import React from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/shop">
              Shop
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <SearchOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
