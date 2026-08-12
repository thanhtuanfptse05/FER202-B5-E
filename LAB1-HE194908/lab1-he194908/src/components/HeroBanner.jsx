import React from "react";
import { Carousel } from "react-bootstrap";

function HeroBanner() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/images/banner1.jpg"
          alt="BANNER1"
          style={{
            height: "500px",
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "auto",
          }}
        />
        <Carousel.Caption className="hero-caption">
          <h3>SUMMER SALE UP TO 50%</h3>
          <p>SUMMER SALE UP TO 50%</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/images/banner2.jpg"
          alt="BANNER2"
          style={{
            height: "500px",
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "auto",
          }}
        />
        <Carousel.Caption className="hero-caption">
          <h3>SUMMER SALE UP TO 50%</h3>
          <p>SUMMER SALE UP TO 50%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src="/images/banner3.jpg"
          alt="BANNER3"
          style={{
            height: "500px",
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "auto",
          }}
        />
        <Carousel.Caption className="hero-caption">
          <h3>SUMMER SALE UP TO 50%</h3>
          <p>SUMMER SALE UP TO 50%</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroBanner;
