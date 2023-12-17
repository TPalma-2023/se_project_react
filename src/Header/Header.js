import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/Logo.svg").default} alt="logo"></img>
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">+Add Clothes</button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img
            src={require("../images/Ellipse 18.svg").default}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
