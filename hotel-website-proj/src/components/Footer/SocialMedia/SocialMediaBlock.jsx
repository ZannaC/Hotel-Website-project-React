import React from "react";
import { socialMediaData } from "./socialMediaData";

const SocialMediaBlock = (props) => (
  <div>
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
