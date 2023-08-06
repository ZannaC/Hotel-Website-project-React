import React from "react";
import AddressBlock from "./Address/AddressBlock";
import AboutUsBlock from "./AboutUs/AboutUsBlock";
import SocialMediaBlock from "./SocialMedia/SocialMediaBlock";
import EmailBlock from "./Email/EmailBlock";
import FooterStyle from "./Footer.module.scss";

const Footer = (props) => (
  <div className={FooterStyle.container}>
    <div className={FooterStyle.infoBlock}>
      <AddressBlock />
      <AboutUsBlock />
      <SocialMediaBlock />
      <EmailBlock />
    </div>
  </div>
);

export default Footer;
