import React from "react";
import { aboutUsData } from "./aboutUsData";

const AboutUsBlock = (props) => (
  <div>
    {aboutUsData.map((data, index) => (
      <ul key={index}>
        <li>
          <a href="#top">{data.about}</a>
        </li>
        <li>
          <a href="#top">{data.contact}</a>
        </li>
        <li>
          <a href="#top">{data.terms}</a>
        </li>
      </ul>
    ))}
  </div>
);

export default AboutUsBlock;
