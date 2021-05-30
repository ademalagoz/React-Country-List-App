import React, { useEffect, useState } from "react";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return countries
    .filter((country) =>
      country.name.toUpperCase().includes(props.search.toUpperCase())
    )
    .map((country) => {
      return (
        <div key={country.name} className="country">
          <div>
            <img src={country.flag} alt={country.name} />
          </div>
          <div>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
          </div>
        </div>
      );
    });
};

export default Countries;
