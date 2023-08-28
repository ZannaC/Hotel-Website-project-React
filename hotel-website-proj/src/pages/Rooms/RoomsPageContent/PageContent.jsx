import React from "react";
import PageContentOneBlock from "./PageContentOneBlock";
import contentData from "./contentData";
import PageContentStyle from "./PageContent.module.scss";

const PageContent = () => (
  <div className={PageContentStyle.container}>
    <h2>ROOMS AND RATES</h2>
    <p>
      Each of our bright, light-flooded rooms come with everything you could
      possibly need for a comfortable stay. And yes, comfort isn’t our only
      objective, we also value good design, sleek contemporary furnishing
      complemented by the rich tones of nature’s palette as visible from our
      rooms’ sea-view windows and terraces.
    </p>
    {contentData.map((data, index) => (
      <PageContentOneBlock
        key={index}
        image={data.image}
        title={data.title}
        price={data.price}
      />
    ))}
  </div>
);

export default PageContent;
