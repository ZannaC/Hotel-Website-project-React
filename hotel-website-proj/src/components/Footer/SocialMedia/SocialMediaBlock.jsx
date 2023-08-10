import React from "react";
import { socialMediaData } from "./socialMediaData";
import SocialMediaStyle from "./SocialMedia.module.scss";

const SocialMediaBlock = (props) => (
  <div className={SocialMediaStyle.socialMediaBlock}>
    {socialMediaData.map((data, index) => (
      <ul>
        <li>
          <a href="#top" key={index}>
            <img src={data.icon} alt="'"></img> {data.social}
          </a>
        </li>
      </ul>
    ))}
  </div>
);

export default SocialMediaBlock;
