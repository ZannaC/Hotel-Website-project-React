import React from "react";
import PageContentOneBlock from "./PageContentOneBlock";
import contentData from "./contentData";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const PageContent = () => {
  return (
    <div>
      <p className={ContentOneBlockStyle.title}>
        All our room types are including complementary breakfast
      </p>
      {contentData.map((data, index) => (
        <PageContentOneBlock
          key={index}
          theme={data.theme}
          info={data.info}
          image={data.image}
        />
      ))}
    </div>
  );
};
export default PageContent;
