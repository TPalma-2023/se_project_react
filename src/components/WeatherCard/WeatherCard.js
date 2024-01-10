import "./WeatherCard.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherOptions } from "../../utils/constants";

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
