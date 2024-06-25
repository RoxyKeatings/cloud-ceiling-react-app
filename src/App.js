import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>coming soon...</h3>
        <Weather />
      </header>
    </div>
  );
}

export default App;
