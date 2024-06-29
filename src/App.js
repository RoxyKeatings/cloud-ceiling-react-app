import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
