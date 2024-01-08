import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import { deleteItems, getInitalItems, postItems } from "../../utils/api";
import Profile from "../Profile/Profile";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
    }
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    }
  };

  const handleDeleteItem = () => {
    deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  const onAddItem = async (values) => {
    try {
      const res = await postItems(values);
      setClothingItems((items) => [res, ...items]);
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInitalItems()
      .then((item) => {
        setClothingItems(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />
        <Switch>
          <Route exact path="/">
            <Main
              onSelectCard={handleSelectedCard}
              temp={temp}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onClick={handleCreateModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onClick={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
