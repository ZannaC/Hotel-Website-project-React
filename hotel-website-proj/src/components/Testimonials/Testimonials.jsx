import React, { useState } from "react";
import testimonialsData from "./testimonialsData";
import TestimonialsStyle from "./Testimonials.module.scss";
import ScrollBtn from "../ui/ScrollBtn/ScrollBtn";

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
      <h3>{testimonialsData[currentTestimonialIndex].testimonials}</h3>
      <h4>{testimonialsData[currentTestimonialIndex].author}</h4>
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
      {/* NOTE(only scroll without data array index control): <ScrollBtn
        onScrollRight={handleScrollRight}
        onScrollLeft={handleScrollLeft}
  /> */}
    </div>
  );
};

export default Testimonials;
