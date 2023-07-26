import React, { useState } from "react";

export const ShowCountries = ({ countries, setCountry, setCountries }) => {
  const [visible, setVisible] = useState(false);

  const handleShowCountry = (country) => {
    if (!visible) {
      setVisible(true);
      setCountry(country);
      setCountries(null);
    } else {
      setVisible(false);
      setCountry(null);
    }
  };
  return countries.map((country) => {
    return (
      <React.Fragment key={`${country.name.common}-${country.cca3}`}>
        <p>
          {country.name.common}{" "}
          <button onClick={() => handleShowCountry(country)}>
            {visible ? "Hide" : "Show"}
          </button>
        </p>
      </React.Fragment>
    );
  });
};
