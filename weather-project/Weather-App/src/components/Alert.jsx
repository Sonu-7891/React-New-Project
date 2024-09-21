import axios from "axios";
import { useEffect, useState } from "react";

export const WeatherAlert = () => {
  const [alert, setAlert] = useState([]); // Initialize alert as an empty array
  const apiKey = "6cba68d5bdeb589bec630a3e212ffd86";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );
          setAlert(response.data.alerts || []); // Set alerts or default to an empty array if no alerts exist
        } catch (error) {
          console.error("Error fetching weather alerts:", error);
        }
      });
    }
  }, []);

  return (
    <div>
      {alert.length > 0 ? (
        <div className="alert">
          <h3>Weather Alerts:</h3>
          {alert.map((alertItem, index) => (
            <p key={index}>{alertItem.description}</p>
          ))}
        </div>
      ) : (
        <h2>No active weather alerts.</h2>
      )}
    </div>
  );
};
