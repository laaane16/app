import { Pagination, A11y } from "swiper/modules";
import React from "react";

import Carousel from "../UI/carousel/Carousel";
import Image from "../UI/image/Image";
import firstImageSrc from "./../../assets/img/FirstContactsSliderImage.jpg";
import secondImageSrc from "./../../assets/img/SecondContactsSliderImage.jpg";
import thirdImageSrc from "./../../assets/img/ThirdContactsSliderImage.jpg";
import fourthImageSrc from "./../../assets/img/FourthContactsSliderImage.jpg";

const LifeSectionCarousel: React.FC = (props) => {
  const slides: string[] = [firstImageSrc, secondImageSrc, thirdImageSrc, fourthImageSrc];

  return (
    <Carousel
      sliders={slides.map((i, index) => (
        <Image clss = 'life__carousel-item' key = {index} imageSrc={i} />
      ))}
      modules={[Pagination, A11y]}
      slidesPerView={3.5}
      a11y={true}
      loop={true}
      pagination={{ clickable: true }}
    />
  );
};

export default LifeSectionCarousel;
