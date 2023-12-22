import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ onSelectCard, temp }) {
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [temp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" temp={temp} />
      <section className="card_section" id="card-section">
        <div className="main_text">
          Today is {temp}°F / You may want to wear:
        </div>
        <div className="card_items">
          {filteredCards.map((item) => {
            const key = item._id;
            return (
              <ItemCard item={item} key={key} onSelectCard={onSelectCard} />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
