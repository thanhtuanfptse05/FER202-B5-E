import React from "react";
import { bannerData } from "../data";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerData.image} alt="Pizza" />
      <div className="banner-content">
        <h1>{bannerData.title}</h1>
        <p>{bannerData.subtitle}</p>
      </div>
    </div>
  );
}

export default Banner;
