import "./WeatherCard.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const weatherOptions = [
  {
    url: require("../../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  { url: require("../../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, temp = 0 }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {temp}°{currentTemperatureUnit}
      </div>

      <img src={imageSrcUrl} alt="sunny" className="weather_image"></img>
    </section>
  );
};

export default WeatherCard;
