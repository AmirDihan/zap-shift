import React, { use } from "react";
import customer_top from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div className="my-10 rounded-2xl p-10">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-10">
          <img src={customer_top} alt="" />
        </div>
        <div className="flex-1 text-center mb-5">
          <h3 className="text-3xl font-bold text-secondary mb-4">
            What our customers are sayings
          </h3>
          <p>
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce <br /> pain, and strengthen
            your body with ease!
          </p>
        </div>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={50}
          loop={true}
          slidesPerView={3}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <div className="prev-btn text-2xl">
            <button className="h-10 w-10 rounded-full bg-white hover:bg-primary">←</button>
          </div>
          <div>
            <div className="custom-pagination"></div>
          </div>
          <div className="next-btn text-2xl">
            <button className="h-10 w-10 rounded-full bg-white hover:bg-primary">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
