// CarouselRightNavigation.jsx
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightArrow from "../Assets/RightArrow.png";
import styles from "./Carousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNav}>
      {/* FIX: Pass the reference to an img tag src attribute */}
      {!isEnd && (
        <img 
          src={RightArrow} 
          alt="Next Slide" 
          onClick={() => swiper.slideNext()} 
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default CarouselRightNavigation;