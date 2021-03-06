import React from "react";
import "../styles/App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />

        <footer>
          {" "}
          This project was coded by Yushiko Cloe Salvador and is
          <a href="https://github.com/yccjs/weather-app-react">
            {" "}
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
