import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles.css";
import SiderOne from "./SiderOne";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SiderTwo from "./SliderTwo";
import SiderThree from "./SliderThree";
const PenguinePoseClubNFTs = () => {
  return (
    <div className="pose-club-nfts">
      <h1>Penguine pose club NFTS</h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className="slider"
      >
        <Slider className="slider-inner">
          <Slide index={0}>
            <SiderOne />
          </Slide>
          <Slide index={1}>
            <SiderTwo />
          </Slide>
          <Slide index={2}>
            <SiderThree />
          </Slide>
        </Slider>
        <div className="btn-wrapper">
          <ButtonBack className="btn-back">
            <SlArrowLeft />
          </ButtonBack>
          <ButtonNext className="btn-forth">
            <SlArrowRight />
          </ButtonNext>
        </div>
      </CarouselProvider>
      <div className="copyrights">
        <p>All exclusive to the "The Igloo". fair launch and distribution.</p>
        <p>
          Intellectual property and commercial usage rights to your individual
          NFTs.
        </p>
        <div>
          <button className="btn">Min now</button>
          <button className="btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default PenguinePoseClubNFTs;
