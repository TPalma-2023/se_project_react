import avatar from "../../images/Ellipse 18.svg";
import { React, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./Sidebar.css";

const SideBar = ({ editProfile, loggedIn, logout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar_profile-info">
        <img
          className="sidebar_profile-avatar"
          src={currentUser?.avatar}
          alt="avatar"
        />
        <p className="sidebar_profile-username">{currentUser?.name}</p>
      </div>
      <div className="sidebar_profile-buttons">
        <button className="sidebar_profile-button" onClick={editProfile}>
          Change Profile Data
        </button>
        <button className="sidebar_profile-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
