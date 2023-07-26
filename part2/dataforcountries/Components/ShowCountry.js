import React from "react";
import DisplayWeather from "./DisplayWeather";

const ShowCountry = ({ country }) => {
  console.log("Rendering show country");
  const languages = Object.entries(country.languages);
  const mapper = ([key, value]) => {
    return <li key={key}>{value}</li>;
  };

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <h2>Languages</h2>
      <ul>{languages.map(mapper)}</ul>
      <img
        style={{ border: "solid 1px " }}
        src={`${country.flags.png}`}
        alt={country.flags.alt}
      />
      <DisplayWeather country={country} />
    </>
  );
};

export const MemoizedShowCountry = React.memo(ShowCountry);
