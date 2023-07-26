import React, { useState, useEffect } from "react";
import { getWeatherData } from "../services/weather";

const DisplayWeather = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      getWeatherData(country.capital)
        .then((response) => {
          console.log(
            "Successfully retrieved weather data for",
            country.name.common
          );
          console.log(response.data);
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setWeatherData(null);
        });
    };
    fetchWeatherData();
  }, [country]);

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  return (
    <div>
      {weatherData ? (
        <>
          <h2>Weather in {country.name.common}</h2>
          <p>Temperature: {convertKelvinToCelsius(weatherData.main.temp)} C</p>
          {weatherData.weather.map((weatherInfo) => {
            const icon = weatherInfo.icon;
            return (
              <img
                key={weatherInfo.id}
                style={{ border: "solid 1px grey ", margin: "0.5px" }}
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="The current weather condition"
              />
            );
          })}

          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default DisplayWeather;
