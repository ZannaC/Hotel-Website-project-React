import React from "react";
import { aboutUsData } from "./aboutUsData";
import AboutUsStyle from "./AboutUs.module.scss";

const AboutUsBlock = (props) => (
  <div className={AboutUsStyle.aboutUsBlock}>
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
