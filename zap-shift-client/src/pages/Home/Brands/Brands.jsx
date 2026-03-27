import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import start_people from "../../../assets/brands/start_people.png";

const brandLogos = [
  amazon,
  casio,
  moonstar,
  randstad,
  amazon_vector,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="p-10 text-center">
      <h3 className="text-2xl font-bold mb-10 text-secondary">We've helped thousands of sales teams</h3>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
