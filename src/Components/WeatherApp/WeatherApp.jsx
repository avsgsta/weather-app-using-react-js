/** @format */

import React, { useState } from "react";
import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";
import humadity from "../Assets/humidity.png";

const WeatherApp = () => {
  let api_key = "501616948e0f9a559792eb4a46c7cff5";

  const [wicon, setWicon] = useState(cloud);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humadity = document.getElementsByClassName("humadity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humadity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " Km/h";
    temperature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setWicon(clear);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setWicon(cloud);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setWicon(rain);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setWicon(rain);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setWicon(snow);
    }
    else 
    {
      setWicon(clear);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search city" />
        <div
          className="search"
          onClick={() => {
            search();
          }}
        >
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="cloud-icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humadity} alt="" className="icon" />
          <div className="data">
            <div className="humadity-percent">64%</div>
            <div className="text">Humadity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
