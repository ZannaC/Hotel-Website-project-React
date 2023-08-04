import React from "react";
import ExploreBtn from "../../../../components/ui/ExploreBtn/ExploreBtn";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const PageContentOneBlock = ({ theme, info, image }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={ContentOneBlockStyle.container}>
      <div className={ContentOneBlockStyle.block}>
        <div className={ContentOneBlockStyle.blockInfo}>
          <h2>{theme}</h2>
          <p>{info}</p>
          <form action="https://www.w3schools.com" target="blank">
            <ExploreBtn />
          </form>
        </div>
        <div
          className={ContentOneBlockStyle.blockImage}
          style={backgroundImageStyle}
        ></div>
      </div>
    </div>
  );
};
export default PageContentOneBlock;
