import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner5 from "../../../assets/banner5.png";
import banner6 from "../../../assets/banner6.png";
import banner7 from "../../../assets/banner7.png";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ width: "100vw", overflow: "hidden" }}>
        <img
          className="d-none d-md-block w-100"
          src={banner1}
          alt="First slide"
        />
        <img className="d-md-none d-block" src={banner5} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-md-block  d-none w-100"
          src={banner2}
          alt="First slide"
        />
        <img className="d-md-none d-block" src={banner6} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-md-block  d-none w-100"
          src={banner3}
          alt="First slide"
        />
        <img className="d-md-none d-block" src={banner7} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
