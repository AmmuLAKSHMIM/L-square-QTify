import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation"
import CarouselRightNavigation from "../Carousel/CarouselRightNavigation"
import "swiper/css";
import styles from "./Carousel.module.css";

const Carousel = ({ data = [], renderComponent }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        {/* Injecting navigation controls directly bounded within the context provider */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        
     {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.customSlide}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;