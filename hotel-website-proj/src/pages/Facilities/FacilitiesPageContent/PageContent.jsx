import React from "react";
import PageContentOneBlock from "./PageContentOneBlock";
import contentData from "./contentData";
import PageContentStyle from "./PageContent.module.scss";

const PageContent = () => (
  <div className={PageContentStyle.container}>
    <h2>FACILITIES</h2>
    <p>
      We want your stay at our lush hotel to be truly unforgettable. That is why
      we give special attention to all of your needs so that we can ensure an
      experience quite uniquw. Luxury hotels offers the perfect setting with
      stunning views for leisure and our modern luxury resort facilities will
      help you enjoy the best of all.
    </p>
    {contentData.map((data, index) => (
      <PageContentOneBlock key={index} image={data.image} title={data.title} />
    ))}
  </div>
);

export default PageContent;
