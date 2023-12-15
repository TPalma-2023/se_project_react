const weatherOptions = [
  { url: "/images/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/rain.svg", day: true, type: "rain" },
  { url: "/images/day/fog.svg", day: true, type: "fog" },
  { url: "/images/day/snow.svg", day: true, type: "snow" },
  { url: "/images/day/storm.svg", day: true, type: "storm" },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  // console.log(imageSrc);
  // console.log(imageSrc[0].url);
  const imageSrcUrl = imageSrc[0].url || "";
  console.log(imageSrcUrl);
  return (
    <section className="weather" id="weather">
      <div className="weather_info">65f</div>

      <img src={imageSrcUrl} alt="sunny" className="weather_image"></img>
    </section>
  );
};

export default WeatherCard;
