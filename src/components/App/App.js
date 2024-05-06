import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { Switch, Route, useHistory } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  deleteItems,
  dislikeClothingItem,
  getInitalItems,
  likeClothingItem,
  postItems,
} from "../../utils/api";
import Profile from "../Profile/Profile";
import { login, register, checkToken, updateUser } from "../../utils/auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
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

  /* ----------------------------- Authentication ----------------------------- */
  const handleRegisterSubmit = ({ name, avatar, email, password }) => {
    register({ name, avatar, email, password })
      .then(() => {
        handleCloseModal();
        handleLoginSubmit({ email, password });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLoginSubmit = ({ email, password }) => {
    login({ email, password })
      .then((res) => {
        handleCloseModal();
        const jwt = res.data;
        localStorage.setItem("jwt", jwt);
        return handleSetUser(jwt);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSetUser = (token) => {
    return checkToken(token)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function logoutUser() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  }

  function updateUserInfo(data) {
    const jwt = localStorage.getItem("jwt");
    updateUser(data, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /* ------------------------------ Card Handlers ----------------------------- */

  const onAddItem = (values) => {
    console.log(values);
    postItems(values)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardLike = (_id, isLiked) => {
    isLiked
      ? dislikeClothingItem(_id)
          .then((cardUpdated) => {
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === cardUpdated.data._id ? cardUpdated.data : card
              );
            });
          })
          .catch((err) => {
            console.error(err);
          })
      : likeClothingItem(_id)
          .then((cardUpdated) => {
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === cardUpdated.data._id ? cardUpdated.data : card
              );
            });
          })
          .catch((err) => {
            console.log(err);
          });
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

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt !== null) {
      handleSetUser(jwt).catch((err) => {
        console.error(err);
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          city={city}
          register={handleRegisterModal}
          login={handleLoginModal}
          loggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main
              onSelectCard={handleSelectedCard}
              temp={temp}
              clothingItems={clothingItems}
              onLike={handleCardLike}
              loggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onClick={handleCreateModal}
              logout={logoutUser}
              loggedIn={isLoggedIn}
              editProfile={handleEditProfileModal}
              onLike={handleCardLike}
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
            isOpen={activeModal === "preview"}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            onSubmit={handleRegisterSubmit}
            isOpen={activeModal === "register"}
            openLoginModal={handleLoginModal}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            onSubmit={handleLoginSubmit}
            isOpen={activeModal === "login"}
            openRegisterModal={handleRegisterModal}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            updateUserInfo={updateUserInfo}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
