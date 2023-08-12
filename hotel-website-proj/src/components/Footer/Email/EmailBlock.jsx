import React from "react";
import EmailForm from "../../form/EmailForm";
import EmailBlockStyle from "./EmailBlock.module.scss";

const EmailBlock = (props) => (
  <div className={EmailBlockStyle.emailBlock}>
    <p>Subscribe to our newsletter</p>
    <EmailForm />
  </div>
);

export default EmailBlock;
