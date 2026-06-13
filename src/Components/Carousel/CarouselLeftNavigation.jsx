// CarouselLeftNavigation.jsx
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "../Assets/LeftArrow.png";
import styles from "./Carousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

 // inside CarouselLeftNavigation.jsx
return (
  <div className={styles.leftNav}>
    {!isBeginning && (
      <img 
        src={LeftArrow} 
        alt="Previous Slide" 
        onClick={() => swiper.slidePrev()} 
      />
    )}
  </div>
);
};

export default CarouselLeftNavigation;