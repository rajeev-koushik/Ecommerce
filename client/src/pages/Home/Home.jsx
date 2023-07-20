// This will be the landing page for the website, with a scrollable image component

import React from "react";
import { Slider } from "../../components/Slider/Slider";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Slider />
    </div>
  );
};
