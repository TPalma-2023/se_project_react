import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ onSelectCard, temp, clothingItems, onLike, loggedIn }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const tempAdjusted = temp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (tempAdjusted >= 86) {
        return "hot";
      } else if (tempAdjusted >= 66 && tempAdjusted <= 85) {
        return "warm";
      } else if (tempAdjusted <= 65) {
        return "cold";
      }
    } else {
      if (tempAdjusted >= 30) {
        return "hot";
      } else if (tempAdjusted >= 19 && tempAdjusted <= 30) {
        return "warm";
      } else if (tempAdjusted <= 18) {
        return "cold";
      }
    }
  }, [temp]);

  const filteredCards = clothingItems
    ? clothingItems.filter((item) => {
        return item.weather.toLowerCase() === weatherType;
      })
    : [];

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" temp={tempAdjusted} />
      <section className="card_section" id="card-section">
        <div className="main_text">
          Today is {tempAdjusted}°{currentTemperatureUnit} / You may want to
          wear:
        </div>
        <div className="card_items">
          {filteredCards.map((item) => {
            const key = item._id;
            return (
              <ItemCard
                item={item}
                key={key}
                onSelectCard={onSelectCard}
                onLike={onLike}
                loggedIn={loggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
