export const APIKey = "82998fd41dea3b7833c39f5b9d310b64";

export const latitude = 38.88;
export const longitude = -77.0;

// export const baseUrl = "http://localhost:3001";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://whattowear.twilightparadox.com"
    : "http://localhost:3001";

export const weatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
];
