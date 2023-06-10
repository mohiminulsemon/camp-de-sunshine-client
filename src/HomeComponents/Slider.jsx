import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/D9kTQPd/8485362-43780.jpg"
            alt="8485362-43780"
            border="0"
            className="object-fill max-h-screen w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/jfK0zGq/fieldsports-camp-girls.jpg"
            alt="fieldsports-camp-girls"
            border="0"
            className="object-fill max-h-screen w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WPHCqxn/Play-All-Summer-with-these-Fun-Camp-Games.jpg"
            alt="Play-All-Summer-with-these-Fun-Camp-Games"
            border="0"
            className="object-fill max-h-screen w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
