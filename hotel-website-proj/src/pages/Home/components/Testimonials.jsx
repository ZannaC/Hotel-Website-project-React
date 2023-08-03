import React, { useState } from "react";
import testimonialsData from "./testimonialsData";
import TestimonialsStyle from "./Testimonials.module.scss";
import ScrollBtn from "../../../components/ui/ScrollBtn";

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleScrollRight = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  };

  const handleScrollLeft = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div className={TestimonialsStyle.container}>
      <h2>Testimonials</h2>

      <div className={TestimonialsStyle.block}>
        <p>{testimonialsData[currentTestimonialIndex].testimonials}</p>
        <p className={TestimonialsStyle.author}>
          {testimonialsData[currentTestimonialIndex].author}
        </p>
      </div>

      {/* NOTE(only scroll without data array index control): <ScrollBtn
        onScrollRight={handleScrollRight}
        onScrollLeft={handleScrollLeft}
  /> */}

      <ScrollBtn
        onScrollRight={() => {
          if (currentTestimonialIndex === testimonialsData.length - 1) {
            return;
          }
          handleScrollRight();
        }}
        onScrollLeft={() => {
          if (currentTestimonialIndex === 0) {
            return;
          }
          handleScrollLeft();
        }}
      />
    </div>
  );
};

export default Testimonials;
