import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  function displayWeather(response) {
    console.log(response.data);
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
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search City Weather.."
          onChange={handleChange}
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
