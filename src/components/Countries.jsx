import React, { useContext } from 'react';
import Country from './Country';
import CountriesContext from '../context/CountriesContext';

const Contries = () => {
  const { getCountries, countries } = useContext(CountriesContext);

  return (
    <div className='z-10 flex flex-wrap justify-center mx-6 gap-x-6 gap-y-6 md:gap-x-4 lg:justify-start lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
      {countries.map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </div>
  );
};

export default Contries;
