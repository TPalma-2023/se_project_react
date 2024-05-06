import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ onSubmit, onClose, isOpen, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  function handleLoginSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <ModalWithForm
      title="Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleLoginSubmit}
    >
      <label>
        <p className="modal_label">Email</p>
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
        <p className="modal_label">Password</p>
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
      <button className="modal_button_submit" type="submit">
        Log In
      </button>
      <button className="modal_link" type="button" onClick={openRegisterModal}>
        {" "}
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
