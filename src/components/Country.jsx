import React from 'react';

const Country = ({ country }) => {
  return (
    <div className='country-card flex flex-col justify-between cursor-pointer shadow-xl select-text font-semibold bg-white dark:bg-blue-1000 rounded-lg md:w-72 hover:scale-105 transition-all duration-200'>
      <img
        src={country.flags.png}
        alt='flag'
        className='w-80 h-48 rounded-t-lg md:w-72 md:h-40'
      />

      <article className='flex flex-col w-2/3 space-y-2 m-6 dark:text-slate-300'>
        <h3>{country.name.common}</h3>

        <h4>Population: {Number(country.population).toLocaleString()}</h4>

        <h4>Region: {country.region}</h4>

        <h4>Capital: {country.capital}</h4>
      </article>
    </div>
  );
};

export default Country;
