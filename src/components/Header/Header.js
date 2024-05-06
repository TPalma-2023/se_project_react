import "./Header.css";
import logo from "../../images/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onCreateModal, city, loggedIn, login, register }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <div className="header_text">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header_logo">
        <ToggleSwitch />
        {loggedIn ? (
          <>
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
              <p>{currentUser?.name}</p>
              {}
              <img
                className="header_avatar-logo"
                src={currentUser?.avatar}
                alt="avatar"
              ></img>
              {}
            </Link>
          </>
        ) : (
          <>
            <button type="button" className="header_button" onClick={register}>
              Sign Up
            </button>
            <button type="button" className="header_button" onClick={login}>
              Log In
            </button>
          </>
        )}
        {}
      </div>
    </header>
  );
};

export default Header;
