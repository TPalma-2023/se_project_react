import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src="/images/Logo.svg" alt="logo"></img>
          </div>
          <div>date</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button type="text">+Add Clothes</button>
          </div>
          <div>Terrence Tegegne</div>
          <div>
            <img src="/images/Ellipse 18.svg" alt="avatar"></img>
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
      <div class="ModalWithForm"></div>
      <div class="ItemModal"></div>
    </div>
  );
}

export default App;
