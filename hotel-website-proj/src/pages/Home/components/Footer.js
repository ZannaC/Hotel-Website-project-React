import React from "react";
import { adressData, aboutUsData, socialMediaData } from "./footerData";
import FooterStyle from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={FooterStyle.container}>
      <div className={FooterStyle.infoBlock}>
        <div>
          <h3>LUXURY</h3>
          <h3>HOTELS</h3>
          {adressData.map((data, index) => (
            <div key={index}>
              <p>{data.adress}</p>
              <p>{data.phone}</p>
              <p>{data.email}</p>
            </div>
          ))}
        </div>

        <div>
          {aboutUsData.map((data, index) => (
            <div key={index}>
              <p>{data.about}</p>
              <p>{data.contact}</p>
              <p>{data.terms}</p>
            </div>
          ))}
        </div>

        <div>
          {socialMediaData.map((data, index) => (
            <p>
              <a href="#top" key={index}>
                <img src={data.icon} alt="'"></img> {data.social}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
