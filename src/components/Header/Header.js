import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/Ellipse 18.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <div className="header_text">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header_text header_button"
          >
            +Add Clothes
          </button>
        </div>
        <Link to="/profile" className="header_text">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
