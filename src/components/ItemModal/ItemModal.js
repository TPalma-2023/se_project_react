const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal_preview">
        <button
          type="button"
          onClick={onClose}
          className="modal_button-close"
        ></button>

        <img
          className="modal_image"
          src={selectedCard.link}
          alt={selectedCard.alt}
        />
        <div className="modal_sub-title">
          <div className="modal_item-name">{selectedCard.name}</div>
          <div className="modal_weather-type">
            Weather type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
