import React from "react";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row">
        <div class="col-4">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              <strong> Sunday</strong>
              <div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span> |{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Monday<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span> |{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Tuesday<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span> |{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Wednesday<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span> |{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div className="forecast-weekdays">
            <div className="forecast-dayofweek">
              Thursday<div className="forecast-weather-icon">☀️</div>
              <span className="forecast-temp-max">24°C</span> |{" "}
              <span className="forecast-temp-min">13°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
