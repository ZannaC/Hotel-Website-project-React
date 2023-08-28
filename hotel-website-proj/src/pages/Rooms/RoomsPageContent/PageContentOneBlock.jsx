import React from "react";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";
import ExploreBtn from "../../../components/ui/ExploreBtn/ExploreBtn";
import ViewMoreBtn from "../../../components/ui/ViewMoreBtn/ViewMoreBtn";

const PageContentOneBlock = ({ image, title, price }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  const roomPrice = `$${price} Avg/night`;

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
        <div className={ContentOneBlockStyle.viewMore}>
          <ViewMoreBtn />
          view room details
        </div>
        <ExploreBtn btnText={roomPrice} />
      </div>
    </div>
  );
};
export default PageContentOneBlock;
