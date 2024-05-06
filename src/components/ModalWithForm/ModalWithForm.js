import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  // buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          type="button"
          onClick={onClose}
          className="modal_button-close"
        ></button>
        <h3 className="modal_title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          {/* <button
            type="submit"
            className="modal_button_submit modal_button_submit-disabled"
          >
            {buttonText}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
