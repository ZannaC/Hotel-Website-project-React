import React from "react";
import scrollLeft from "../../../assets/images/button/btnLeft.png";
import scrollRight from "../../../assets/images/button/btnRight.png";
import ScrollBtnStyle from "../../../components/ui/ScrollBtn/ScrollBtn.module.scss";

const ScrollBtn = ({ onScrollRight, onScrollLeft }) => (
  <div>
    <button
      type="button"
      className={ScrollBtnStyle.scrollBtn}
      onClick={onScrollLeft}
    >
      <img src={scrollLeft} alt="Luxury Hotels" />
    </button>
    <button
      type="button"
      className={ScrollBtnStyle.scrollBtn}
      onClick={onScrollRight}
    >
      <img src={scrollRight} alt="Luxury Hotels" />
    </button>
  </div>
);
export default ScrollBtn;
