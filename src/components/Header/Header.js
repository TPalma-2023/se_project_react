import "./Header.css";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo"></img>
        </div>
        <div className="header_text">{currentDate}, Virginia</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header_text header_button"
          >
            +Add Clothes
          </button>
        </div>
        <div className="header_text">Terrence Tegegne</div>
        <div>
          <img
            src={require("../../images/Ellipse 18.svg").default}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
