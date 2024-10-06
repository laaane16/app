import Carousel from "../UI/carousel/Carousel";
import Image from "../UI/image/Image";
import firstImageSrc from "./../../assets/img/FirstCategoriesSliderImage.jpg";
import secondImageSrc from "./../../assets/img/SecondCategoriesSliderImage.jpg";
import thirdImageSrc from "./../../assets/img/ThirdCategoriesSliderImage.jpg";
import { Pagination, A11y } from "swiper/modules";
import React from "react";

const CategoriesSectionCarousel: React.FC = () => {
  const slides: string[] = [firstImageSrc, secondImageSrc, thirdImageSrc];

  return (
    <Carousel
      sliders={slides.map((i, index) => (
        <Image clss="categories__carousel-item" key={index} imageSrc={i} />
      ))}
      modules={[Pagination, A11y]}
      slidesPerView={1}
      a11y={true}
      loop={true}
      pagination={{ clickable: true }}
    />
  );
};

export default CategoriesSectionCarousel;
