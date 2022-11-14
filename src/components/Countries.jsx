import React, { useContext } from 'react';
import Country from './Country';
import CountriesContext from '../context/CountriesContext';

const Contries = () => {
  const { results } = useContext(CountriesContext);

  return (
    <div className='z-10 flex flex-wrap justify-center mx-auto gap-x-6 gap-y-6 md:gap-x-4 lg:justify-start lg:max-w-4xl xl:gap-x-10 xl:max-w-7xl'>
      {results.map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </div>
  );
};

export default Contries;
