import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ onSubmit, onClose, isOpen, openLoginModal }) => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleSetAvatar = (e) => {
    setAvatar(e.target.value);
  };

  function handleRegisterUserSubmit(e) {
    e.preventDefault();
    onSubmit({ name, avatar, email, password });
  }

  return (
    <ModalWithForm
      title="Sign Up"
      onSubmit={handleRegisterUserSubmit}
      onClose={onClose}
      buttonText="Sign Up"
      isOpen={isOpen}
    >
      <label>
        <p className="modal_label">Email*</p>
        <input
          type="text"
          name="email"
          className="modal_input"
          placeholder="Email"
          id="email-input"
          value={email}
          required
          onChange={handleSetEmail}
        ></input>
      </label>
      <label>
        <p className="modal_label">Password*</p>
        <input
          type="text"
          name="password"
          className="modal_input"
          placeholder="Password"
          id="password-input"
          value={password}
          required
          onChange={handleSetPassword}
        ></input>
      </label>
      <label>
        <p className="modal_label">Name*</p>
        <input
          type="text"
          name="name"
          className="modal_input"
          placeholder="Name"
          id="name-input"
          minLength={1}
          maxLength={30}
          value={name}
          required
          onChange={handleSetName}
        ></input>
      </label>
      <label>
        <p className="modal_label">Avatar*</p>
        <input
          type="url"
          name="url"
          className="modal_input"
          placeholder="Avatar URL"
          id="avatar-input"
          value={avatar}
          required
          onChange={handleSetAvatar}
        ></input>
      </label>
      <button className="modal_button_submit" type="submit">
        Sign Up
      </button>
      <button className="modal_link" type="button" onClick={openLoginModal}>
        {" "}
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
