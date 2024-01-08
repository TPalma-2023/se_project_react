import avatar from "../../images/Ellipse 18.svg";

const SideBar = () => {
  return (
    <div>
      <div className="profile__info">
        <img className="profile__avatar-logo" src={avatar} alt="avatar" />
        <p className="profile__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
