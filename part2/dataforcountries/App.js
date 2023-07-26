import axios from "axios";
import React, { useState } from "react";
import { MemoizedShowCountry } from "./Components/ShowCountry";
import { ShowCountries } from "./Components/ShowCountries";

const App = () => {
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    setCountry(null);
    setCountries(null);
    event.preventDefault();
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${searchTerm}`
      )
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("404")) {
          axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then((response) => {
              const allCountries = response.data;
              const matchingCountries = allCountries.filter((country) =>
                country.name.common
                  .toUpperCase()
                  .includes(searchTerm.toUpperCase())
              );

              if (matchingCountries.length > 10) {
                alert("Please make your search term more specific.");
                return;
              } else if (matchingCountries.length === 1) {
                setCountry(matchingCountries[0]);
              } else {
                console.log("matching Countries", matchingCountries);
                setCountries(matchingCountries);
              }
            });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>

      {country ? <MemoizedShowCountry country={country} /> : ""}
      {countries ? (
        <ShowCountries
          countries={countries}
          setCountry={setCountry}
          setCountries={setCountries}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
