import React from "react";
import { adressData, aboutUsData, socialMediaData } from "./footerData";
import EmailForm from "../form/EmailForm";
import FooterStyle from "./Footer.module.scss";

const Footer = (props) => (
  <div className={FooterStyle.container}>
    <div className={FooterStyle.infoBlock}>
      <div>
        <h3>LUXURY</h3>
        <h6>HOTELS</h6>
        <ul>
          {adressData.map((data, index) => (
            <li key={index}>
              <p className={FooterStyle.adressBlock}>{data.adress}</p>
              <p className={FooterStyle.adressBlock}>{data.phone}</p>
              <p className={FooterStyle.adressBlock}>{data.email}</p>
            </li>
          ))}
        </ul>
      </div>

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
      <div>
        <p className={FooterStyle.emailBlock}>Subscribe to our newsletter</p>
        <EmailForm />
      </div>
    </div>
  </div>
);

export default Footer;
