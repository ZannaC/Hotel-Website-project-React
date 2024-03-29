import React from "react";
import ExploreBtn from "../../../components/ui/ExploreBtn/ExploreBtn";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const PageContentOneBlock = ({ theme, info, image }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={ContentOneBlockStyle.block}>
      <div className={ContentOneBlockStyle.blockInfo}>
        <h2>{theme}</h2>
        <h3>{info}</h3>
        <form action="https://www.w3schools.com" target="blank">
          <ExploreBtn btnText="EXPLORE" />
        </form>
      </div>
      <div
        className={ContentOneBlockStyle.blockImage}
        style={backgroundImageStyle}
      ></div>
    </div>
  );
};
export default PageContentOneBlock;
