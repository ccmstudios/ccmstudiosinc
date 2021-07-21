import React from "react";
import CCM from "../assets/images/CCMLOGO.GIF";
import CCMSPACE from "../assets/images/ccmspacegif.gif";
import CCMFILM from "../assets/images/ccmfilmgif.gif";
import CCMUNIVERSE from "../assets/images/ccmuniversegif.gif";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div>
      <Carousel fade controls='false'>
        <Carousel.Item>
          <img
            id="banner"
            className="d-block w-100"
            src={CCM}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="banner"
            className="d-block w-100"
            src={CCMSPACE}
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="banner"
            className="d-block w-100"
            src={CCMFILM}
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="banner"
            className="d-block w-100"
            src={CCMUNIVERSE}
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
