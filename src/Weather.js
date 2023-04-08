import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 id="header-city">Sydney, Australia</h2>
          <li id="today">Thursday 1:14</li>
          <li id="description">Cloudy</li>
          <br />
        </div>
        <div class="col">
          <form id="city-form">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control round"
                placeholder="Enter a city"
                id="searched-city"
              />
              <button
                type="button"
                class="btn btn-outline-info round"
                id="search-button"
              >
                Search
              </button>
              <button
                type="button"
                class="btn btn-outline-info round"
                id="current-button"
              >
                Current Weather
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img
            src={require("./images/clear-sky.png")}
            alt="weather status"
            id="icon"
          />
        </div>
        <div class="col temperature">
          <h1>
            <span id="temp"></span> 26°{" "}
            <a id="c-unit" class="active" href="/">
              C
            </a>
            <a id="f-unit" href="/">
              F
            </a>
          </h1>
        </div>
        <div class="col-6 temperature">
          <h3 class="information">
            Humidity: <span id="humidity"> 60 </span>%<br />
            Wind: <span id="wind">8 </span>km/h <br />
          </h3>
        </div>
      </div>
      <br />
      <div class="row row-cols-1 row-cols-md-5 g-3" id="forecast"></div>
      <div id="github-link"></div>
      <a
        href="https://github.com/Nef3libata/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code by Samaneh
      </a>
    </div>
  );
}
