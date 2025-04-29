import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({current: {}, forecast: {}});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (searchInput) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${API_KEY}`;
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${API_KEY}&units=metric`;
  
  console.log(weatherData)
setLoading(true);
try {
  // Fetch both datasets in parallel
  const [currentWeatherResponse, forecastResponse] = await Promise.all([
    fetch(CURRENT_WEATHER_URL),
    fetch(FORECAST_URL),
  ]);

  // Check for errors in both responses
  if (!currentWeatherResponse.ok || !forecastResponse.ok) {
    throw new Error("Failed to fetch weather data");
  }

  // Parse both responses
  const currentWeatherData = await currentWeatherResponse.json();
  const forecastData = await forecastResponse.json();

  // Combine the two datasets
  setWeatherData({
    current: currentWeatherData,
    forecast: forecastData,
  });
  console.log(weatherData.current);
  setError(null);
} catch (err) {
  setError(err.message);
  setWeatherData(null);
}
setLoading(false);
};


  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData, error,loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;