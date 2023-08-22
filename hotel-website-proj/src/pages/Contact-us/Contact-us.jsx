// import Header from "../../components/Header/Header";
import React, { useState } from "react";
import ContactStyle from "./Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("Kate");
  const [surname, setSurname] = useState("Parker");
  const [email, setEmail] = useState("kate@example.com");
  const [address, setAddress] = useState("Abbey Road 45, London, UK");
  const [password, setPassword] = useState("********");
  const [nameEditing, setNameEditing] = useState(false);
  const [surnameEditing, setSurnameEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [passwordEditing, setPasswordEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameClick = () => {
    setNameEditing(true);
  };

  const handleSurnameClick = () => {
    setSurnameEditing(true);
  };

  const handleEmailClick = () => {
    setEmailEditing(true);
  };

  const handleAddressClick = () => {
    setAddressEditing(true);
  };

  const handlePasswordClick = () => {
    setPasswordEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // data to a server for saving
    // For now log the updated values
    console.log("Updated Name:", name);
    console.log("Updated Name:", surname);
    console.log("Updated Email:", email);
    console.log("Updated Address:", address);
    console.log("Updated Password:", password);

    // Reset edit states
    setNameEditing(false);
    setSurnameEditing(false);
    setEmailEditing(false);
    setAddressEditing(false);
    setPasswordEditing(false);
    setSubmitted(true);
  };

  const handleCancel = () => {
    // Reset fields to their initial values
    setName("Kate");
    setSurname("Parker");
    setEmail("kate@example.com");
    setAddress("Abbey Road 45, London, UK");
    setPassword("********");

    // Reset edit states
    setNameEditing(false);
    setSurnameEditing(false);
    setEmailEditing(false);
    setAddressEditing(false);
    setPasswordEditing(false);
  };

  return (
    <div className={ContactStyle.App}>
      <h1>Welcome, {submitted ? name : "Kate"}!</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onClick={handleNameClick}
          readOnly={!nameEditing}
          required
        />
        <br />
        <label>Surname</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          onClick={handleSurnameClick}
          readOnly={!surnameEditing}
          required
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={handleEmailClick}
          readOnly={!emailEditing}
          required
        />
        <br />
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onClick={handleAddressClick}
          readOnly={!addressEditing}
          required
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={handlePasswordClick}
          readOnly={!passwordEditing}
          required
        />
        <br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Contact;
