import "./App.css";
import "./Weather.css";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <Header />
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
