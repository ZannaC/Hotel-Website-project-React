import React from "react";
import ViewMoreBtnStyle from "../../../components/ui/ViewMoreBtn/ViewMoreBtn.module.scss";

const ViewMoreBtn = ({ onScrollRight, onScrollLeft }) => (
  <div className={ViewMoreBtnStyle.Btn}>
    <button type="button" onClick={onScrollLeft}>
      <span className={ViewMoreBtnStyle.plus}>+</span>
    </button>
  </div>
);
export default ViewMoreBtn;
