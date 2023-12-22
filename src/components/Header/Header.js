import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/Ellipse 18.svg";

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header_text">
          {currentDate}, {city}
        </div>
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
        <p className="header_text">Terrence Tegegne</p>
        <div>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
