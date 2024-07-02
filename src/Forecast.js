import React from "react";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row">
        <div class="col-4">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              <strong> Sun</strong>
              <div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span>
              <strong> | </strong>{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Mon<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span>{" "}
              <strong>----</strong>{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Tues<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span>{" "}
              <strong>----</strong>{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Wed<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span>{" "}
              <strong>----</strong>{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Thurs<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span>{" "}
              <strong>----</strong>{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
