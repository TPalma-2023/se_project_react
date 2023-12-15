import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section id="card-section">card section</section>
      </main>
      <WeatherCard day={true} type="cloudy" />
      <footer></footer>
      <div className="ModalWithForm"></div>
      <div className="ItemModal"></div>
    </div>
  );
}

export default App;
