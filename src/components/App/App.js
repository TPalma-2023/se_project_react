import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function App() {
  const weatherTemp = "75F";
  const [activeModal, setActiveModal] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = parseCityData(data);
        setTemp(temperature);
        setCity(city);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} city={city} />
      <Main
        weatherTemp={weatherTemp}
        onSelectCard={handleSelectedCard}
        temp={temp}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label>
            <p className="modal_label">Name</p>
            <input
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              className="modal_input"
              placeholder="Name"
              id="name-input"
            ></input>
          </label>
          <label>
            <p className="modal_label">Image</p>
            <input
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              className="modal_input"
              placeholder="Image URL"
              id="image-input"
            ></input>
          </label>
          <p className="modal_label">Select the weather type:</p>
          <div className="modal_radio_options">
            <div className="modal_radio-option">
              <input
                type="radio"
                id="hot"
                value="hot"
                className="radio_button"
                name="weatherType"
              ></input>
              <label htmlFor="hot" className="radio_label">
                Hot
              </label>
            </div>
            <div className="modal_radio-option">
              <input
                type="radio"
                id="warm"
                value="warm"
                className="radio_button"
                name="weatherType"
              ></input>
              <label htmlFor="warm" className="radio_label">
                Warm
              </label>
            </div>
            <div className="modal_radio-option">
              <input
                type="radio"
                id="cold"
                value="cold"
                className="radio_button"
                name="weatherType"
              ></input>
              <label htmlFor="cold" className="radio_label">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
