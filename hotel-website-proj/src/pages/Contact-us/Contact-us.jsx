// import Header from "../../components/Header/Header";
import React, { useState } from "react";
import ContactStyle from "./Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("Kate");
  const [surname, setSurname] = useState("Parker");
  const [email, setEmail] = useState("kate@example.com");
  const [address, setAddress] = useState("Abbey Road 45, London, UK");

  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameEditing, setNameEditing] = useState(false);
  const [surnameEditing, setSurnameEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [passwordEditing, setPasswordEditing] = useState(false);
  const [newPasswordEditing, setNewPasswordEditing] = useState(false);
  const [confirmPasswordEditing, setConfirmPasswordEditing] = useState(false);
  const [existingPasswordError, setExistingPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
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

  const handleNewPasswordClick = () => {
    setNewPasswordEditing(true);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setExistingPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    if (existingPassword !== "333") {
      setExistingPasswordError("Existing password doesn't match.");
    }

    if (newPassword === existingPassword) {
      setNewPasswordError(
        "The new password can't be the same as the previous one"
      );
    }

    if (newPassword !== confirmPassword) {
      setNewPasswordError("New password and confirm password don't match.");
    }

    if (existingPasswordError || newPasswordError || confirmPasswordError) {
      return;
    }

    // Update password and other data
    setExistingPassword(newPassword);

    // Reset edit states
    setNameEditing(false);
    setSurnameEditing(false);
    setEmailEditing(false);
    setAddressEditing(false);
    // setPasswordEditing(false);
    // setNewPasswordEditing(false);
    // setConfirmPasswordEditing(false);
    setSubmitted(true);
  };

  const handleCancel = () => {
    // Reset fields to their initial values
    setName("Kate");
    setSurname("Parker");
    setEmail("kate@example.com");
    setAddress("Abbey Road 45, London, UK");
    // setPassword(newPassword);

    // Reset edit states
    setNameEditing(false);
    setSurnameEditing(false);
    setEmailEditing(false);
    setAddressEditing(false);
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
          value={existingPassword}
          onChange={(e) => setExistingPassword(e.target.value)}
          onClick={handlePasswordClick}
          readOnly={!passwordEditing}
        />
        <br />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          onClick={handleNewPasswordClick}
          readOnly={!newPasswordEditing}
        />
        <br />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onClick={handleConfirmPasswordClick}
          readOnly={!confirmPasswordEditing}
        />
        <br />

        {existingPasswordError && (
          <p className="error">{existingPasswordError}</p>
        )}
        {newPasswordError && <p className="error">{newPasswordError}</p>}
        {confirmPasswordError && (
          <p className="error">{confirmPasswordError}</p>
        )}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Contact;
