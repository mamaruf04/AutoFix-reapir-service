import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner5 from "../../../assets/banner5.png";
import banner6 from "../../../assets/banner6.png";
import banner7 from "../../../assets/banner7.png";
import "./Banner.css";

const HomeCarousel = () => {
  return (
    <Carousel className="mt-3 ">
      <Carousel.Item>
        <img
          className="d-none d-md-block w-100 rounded-4 opacity-img"
          src={banner1}
          alt="First slide"
        />
        <img
          className="d-md-none d-block opacity-img"
          src={banner5}
          alt="First slide"
        />
        <Carousel.Caption className="h-50 my-auto">
          <h3 className="md:display-5 display-6 fw-semibold">
            Expert Auto Repairs for Your Peace of Mind
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-md-block  d-none w-100 rounded-4 opacity-img"
          src={banner2}
          alt="Second slide"
        />
        <img
          className="d-md-none d-block opacity-img"
          src={banner6}
          alt="First slide"
        />
        <Carousel.Caption className="h-50 my-auto">
          <h3 className="md:display-5 display-6 fw-semibold">
            Keeping Your Car Running Like New
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-md-block  d-none w-100 rounded-4 opacity-img"
          src={banner3}
          alt="Third slide"
        />
        <img
          className="d-md-none d-block opacity-img"
          src={banner7}
          alt="First slide"
        />
        <Carousel.Caption className="h-50 my-auto">
          <h3 className="md:display-5 display-6 fw-semibold">
            Drive with Confidence - Expert Auto Repairs
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
