import { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ updateUserInfo, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  function handleSetName(e) {
    setName(e.target.value);
  }

  const [avatar, setAvatar] = useState("");
  function handleSetAvatar(e) {
    setAvatar(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    updateUserInfo({ name, avatar });
  }

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [currentUser.name, currentUser.avatar]);

  return (
    <ModalWithForm
      name="edit"
      title="Change Profile Data"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <div>
        <label>
          <p className="modal_label">Name*</p>
          <input
            type="text"
            name="Name"
            className="modal_input"
            placeholder="Name"
            id="name-input"
            value={name}
            required
            onChange={handleSetName}
          ></input>
        </label>
        <label>
          <p className="modal_label">Avatar*</p>
          <input
            type="text"
            name="Avatar"
            className="modal_input"
            placeholder="Avatar"
            id="avatar-input"
            value={avatar}
            required
            onChange={handleSetAvatar}
          ></input>
        </label>
        <button className="modal_button_submit" type="submit">
          Save Changes
        </button>
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;
