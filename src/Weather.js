import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1270a595e9f33378eae69b900458b3bd";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
  if (city) {
    return (
      <div className="Container">
        <form onSubmit={handleSubmit}>
          <input
            className="search-form"
            type="search"
            placeholder="Search City Weather.."
            onChange={handleChange}
            required
          />{" "}
          {"   "}
          <input className="submitButton" type="submit" value="Search" />
        </form>
        {weather && (
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind:{weather.wind}km/h</li>
            <li>
              <img src={weather.icon} alt="weather-icon" />
            </li>
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for city"
          onChange={handleChange}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}
