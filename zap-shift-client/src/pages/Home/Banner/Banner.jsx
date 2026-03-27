import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

// autoPlay={true} infiniteLoop={true} interval={2000}
const btns = (
  <div className="text-start space-y-4 absolute  bottom-22 left-22">
    <p className="text-xs">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero
      hassle. From personal <br /> packages to business shipments — we deliver
      on time, every time.
    </p>
    <div className="text-sm">
      <button className="btn btn-primary text-black rounded-3xl">
        Track Your Parcel
      </button>
      <BsArrowUpRightCircleFill className="inline-block text-4xl mr-3" />
      <button className="btn btn-outline rounded-lg">Be a rider</button>
    </div>
  </div>
);
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
      <div>
        <img src={bannerImg1} />
        {btns}
      </div>
      <div>
        <img src={bannerImg2} />
        {btns}
      </div>
      <div>
        <img src={bannerImg3} />
        {btns}
      </div>
    </Carousel>
  );
};

export default Banner;
