import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather, imageUrl });
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        <p className="modal_label">Name</p>
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          className="modal_input"
          placeholder="Name"
          id="name-input"
          value={name}
          required
          onChange={handleNameChange}
        ></input>
      </label>
      <label>
        <p className="modal_label">Image</p>
        <input
          type="url"
          name="link"
          minLength="1"
          className="modal_input"
          placeholder="Image URL"
          id="image-input"
          required
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>
      <p className="modal_label">Select the weather type:</p>
      <div className="modal_radio_options">
        <div className="modal_radio-option">
          <input
            type="radio"
            id="hot"
            value="hot"
            className="radio_button"
            name="weatherType"
            onChange={handleWeatherChange}
          ></input>
          <label htmlFor="hot" className="radio_label">
            Hot
          </label>
        </div>
        <div className="modal_radio-option">
          <input
            type="radio"
            id="warm"
            value="warm"
            className="radio_button"
            name="weatherType"
            onChange={handleWeatherChange}
          ></input>
          <label htmlFor="warm" className="radio_label">
            Warm
          </label>
        </div>
        <div className="modal_radio-option">
          <input
            type="radio"
            id="cold"
            value="cold"
            className="radio_button"
            name="weatherType"
            onChange={handleWeatherChange}
          ></input>
          <label htmlFor="cold" className="radio_label">
            Cold
          </label>
        </div>
        <button className="modal_button_submit" type="submit">
          Add Item
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
