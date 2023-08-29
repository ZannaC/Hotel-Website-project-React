// import Header from "../../components/Header/Header";
import React, { useState } from "react";
import ExploreBtn from "../../../components/ui/ExploreBtn/ExploreBtn";
import ContactStyle from "./PageContent.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameEditing, setNameEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [messageEditing, setMessageEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const [existingEmail, setExistingEmail] = useState("kate@example.com");
  // const [existingName, setExistingName] = useState("Kate Simpson");
  const [existingError, setExistingError] = useState("");

  const handleNameClick = () => {
    setNameEditing(true);
  };

  const handleEmailClick = () => {
    setEmailEditing(true);
  };

  const handleMessageClick = () => {
    setMessageEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setExistingError("");

    if (name !== "Kate Simpson" || email !== "kate@example.com") {
      setExistingError(
        "Name should be 'Kate Simpson' and Email should be 'kate@example.com'"
      );
      return; // Prevent submission if validation fails
    }
    setNameEditing(false);
    setEmailEditing(false);
    setSubmitted(true);
  };

  return (
    <div className={ContactStyle.contactForm}>
      <form className={ContactStyle.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={ContactStyle.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onClick={handleNameClick}
          readOnly={!nameEditing}
          required
        />
        <br />

        <label>Email Address</label>
        <input
          className={ContactStyle.input}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={handleEmailClick}
          readOnly={!emailEditing}
          required
        />
        <br />

        <label>Message</label>
        <textarea
          className={ContactStyle.inputMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={handleMessageClick}
          readOnly={!messageEditing}
        />
        <br />

        {existingError && <p className={ContactStyle.error}>{existingError}</p>}
      </form>
      <div className={ContactStyle.submitBtn}>
        <ExploreBtn type="submit" btnText="Submit" />
      </div>
    </div>
  );
};

export default ContactForm;
