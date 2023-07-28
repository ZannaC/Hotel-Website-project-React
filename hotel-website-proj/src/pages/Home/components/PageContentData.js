import React from "react";
import PageContentOneBlock from "../components/PageContentOneBlock";
import room from "../../../assets/images/pages/Home/room.jpg";
import beach from "../../../assets/images/pages/Home/beach.jpg";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

const Data = [
  {
    theme: "Luxury redefined",
    info: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    image: room,
  },
  {
    theme: "Leave your worries in the sand",
    info: "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. ",
    image: beach,
  },
];

const ContentData = () => {
  return (
    <div>
      <p className={ContentOneBlockStyle.title}>
        All our room types are including complementary breakfast
      </p>
      {Data.map((data, index) => (
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
export default ContentData;
