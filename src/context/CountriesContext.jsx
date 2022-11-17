import { createContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
    setResults(data);
  };

  const searchHandler = (e) => {
    const result = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setResults(result);
  };

  const filterRegion = (e) => {
    toggleFilter();
    const result = countries.filter((country) => {
      return country.region.includes(e.target.innerText);
    });
    setResults(result);
  };

  const toggleFilter = () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('opacity-0')) {
      menu.classList.remove('opacity-0', 'h-0');
      menu.classList.add('opacity-100', 'h-36');
      menu.querySelectorAll('div').forEach((menuItem) => {
        menuItem.classList.remove('hidden');
        menuItem.classList.add('block');
      });
    } else if (menu.classList.contains('opacity-100')) {
      menu.classList.remove('opacity-100', 'h-36');
      menu.classList.add('opacity-0', 'h-0');
      menu.querySelectorAll('div').forEach((menuItem) => {
        menuItem.classList.remove('block');
        menuItem.classList.add('hidden');
      });
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        results,
        countries,
        searchHandler,
        filterRegion,
        toggleFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
