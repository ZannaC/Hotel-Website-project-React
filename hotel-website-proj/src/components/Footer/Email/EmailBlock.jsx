import React from "react";
import EmailForm from "../../form/EmailForm";
import FooterStyle from "../Footer.module.scss";

const EmailBlock = (props) => (
  <div>
    <p className={FooterStyle.emailBlock}>Subscribe to our newsletter</p>
    <EmailForm />
  </div>
);

export default EmailBlock;
