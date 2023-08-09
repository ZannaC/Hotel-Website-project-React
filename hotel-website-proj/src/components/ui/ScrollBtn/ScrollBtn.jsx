import React from "react";
import scrollLeft from "../../../assets/images/button/btnLeft.png";
import scrollRight from "../../../assets/images/button/btnRight.png";
import ScrollBtnStyle from "../../../components/ui/ScrollBtn/ScrollBtn.module.scss";

const ScrollBtn = ({ onScrollRight, onScrollLeft }) => (
  <div className={ScrollBtnStyle.scrollBtnBlock}>
    <button
      type="button"
      className={ScrollBtnStyle.scrollBtn}
      onClick={onScrollLeft}
    >
      <img src={scrollLeft} alt="scroll left" />
    </button>
    <button
      type="button"
      className={ScrollBtnStyle.scrollBtn}
      onClick={onScrollRight}
    >
      <img src={scrollRight} alt="scroll right" />
    </button>
  </div>
);
export default ScrollBtn;
