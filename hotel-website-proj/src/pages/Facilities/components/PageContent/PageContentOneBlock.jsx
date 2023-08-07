import React from "react";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const PageContentOneBlock = ({ image, title }) => {
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
    </div>
  );
};
export default PageContentOneBlock;
