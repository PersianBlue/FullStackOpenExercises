import axios from "axios";
const baseurl = "https://api.openweathermap.org/data/2.5/weather?q=";

export const getWeatherData = (city_name) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `${baseurl}${city_name}&appid=${api_key.trim()} `;
  console.log(url);
  return axios
    .get(url)
    .then((response) => {
      //   console.log(response.data);
      return response;
    })
    .catch((error) => {
      if (error.message.includes("401")) {
        alert(
          "Api key not authorized. Please give it some time and check again."
        );
      }
      return null;
    });
};
