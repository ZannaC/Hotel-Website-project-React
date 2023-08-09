import React from "react";
import PageContentOneBlock from "./PageContentOneBlock";
import contentData from "./contentData";
import PageContentStyle from "./PageContent.module.scss";

const PageContent = () => (
  <div className={PageContentStyle.container}>
    <h2>All our room types are including complementary breakfast</h2>
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

export default PageContent;
