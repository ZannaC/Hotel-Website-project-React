import React from "react";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const PageContentOneBlock = ({ image, title, price }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={ContentOneBlockStyle.container}>
      <div className={ContentOneBlockStyle.block}>
        <div
          className={ContentOneBlockStyle.blockImage}
          style={backgroundImageStyle}
        ></div>
        <h2 className={ContentOneBlockStyle.blockInfo}>{title}</h2>
      </div>
      <div className={ContentOneBlockStyle.moreInfo}>
        <div>view room details</div>
        <div>${price} Avg/night</div>
      </div>
    </div>
  );
};
export default PageContentOneBlock;
