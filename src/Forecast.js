import React from "react";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row">
        <div class="col">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Sunday<div className="forecast-weather-icon">☀️</div>
              <div className="forecast-temp-max">24°C</div>
              <div className="forecast-temp-min">13°C</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Monday<div className="forecast-weather-icon">☀️</div>
              <div className="forecast-temp-max">24°C</div>
              <div className="forecast-temp-min">13°C</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Tuesday<div className="forecast-weather-icon">☀️</div>
              <div className="forecast-temp-max">24°C</div>
              <div className="forecast-temp-min">13°C</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Wednesday<div className="forecast-weather-icon">☀️</div>
              <div className="forecast-temp-max">24°C</div>
              <div className="forecast-temp-min">13°C</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Thursday<div className="forecast-weather-icon">☀️</div>
              <div className="forecast-temp-max">24°C</div>
              <div className="forecast-temp-min">13°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
