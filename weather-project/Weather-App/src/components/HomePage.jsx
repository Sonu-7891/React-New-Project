import  { useEffect, useState } from "react";
import axios from "axios";
import { WeatherAlert } from "./Alert";


const HomePage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const apiKey = "6cba68d5bdeb589bec630a3e212ffd86";

  useEffect(() => {
    if (navigator.geolocation) {
        console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          )
          .then((response) => setCurrentWeather(response.data))
            .catch((error) =>
              console.error("Error fetching weather data:", error)
            );
      });
      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    console.log(currentWeather);
  }, []);

  return (
    <div>
      <h1>Current Weather</h1>
      {currentWeather ? (
        <div>
          <h2>{currentWeather.name}</h2>
          <p>Temperature: {currentWeather.main.temp}°C</p>
          <p>Weather: {currentWeather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <WeatherAlert/>
    </div>
  );
};

export default HomePage;
