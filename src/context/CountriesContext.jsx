import { createContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  const searchHandler = (e) => {
    if (e.key === 'Enter') {
      searchCountry(e.target.value);
    }
  };

  const searchCountry = (input) => {
    const result = countries.filter((country) => {
      return country.name.common === input;
    });
    console.log(result);
  };

  return (
    <CountriesContext.Provider
      value={{ countries, getCountries, searchHandler }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
