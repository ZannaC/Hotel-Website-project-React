import React, { useState } from "react";
import EmailFormStyle from "../form/EmailForm.module.scss";

const EmailForm = () => {
  const [data, setData] = useState({ email: "" });

  const onChangeEmail = (event) => {
    setData((currentData) => ({
      ...currentData,
      email: event.target.value,
    }));
  };

  return (
    <div>
      <div className={EmailFormStyle.emailBtn}>
        <div>
          <input
            className={EmailFormStyle.emailInput}
            type="text"
            placeholder="Email Address"
            value={data.email}
            onChange={onChangeEmail}
            name="email-input"
          />
        </div>
        <form
          action="https://www.w3schools.com"
          target="blank"
          name="subscribe option"
        >
          <button type="submit" className={EmailFormStyle.emailSubmitBtn}>
            OK
          </button>
        </form>
      </div>
    </div>
  );
};
export default EmailForm;
