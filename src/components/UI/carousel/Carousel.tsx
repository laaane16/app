import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.scss";

import React from "react";

interface CarouselProps {
  sliders: React.JSX.Element[];

}

const Carousel: React.FC<CarouselProps> = (props) => {
  return (
    <Swiper {...props}>
      {props.sliders.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
