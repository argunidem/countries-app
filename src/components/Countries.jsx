import React from 'react';

const Contries = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    getContries();
  }, []);

  const getContries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  return (
    <div className='flex flex-wrap justify-center mx-6 gap-x-6 gap-y-6 md:justify-around md:gap-x-4 lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
      {countries.map((country, index) => {
        return (
          <div
            key={index}
            className='flex flex-col justify-between shadow-lg bg-white dark:bg-blue-1000 rounded-lg'
          >
            <img
              src={country.flags.png}
              alt='flag'
              className='w-80 h-48 rounded-t-lg md:w-72 md:h-40'
            />

            <article className='flex flex-col space-y-2 m-6 dark:text-slate-300'>
              <h3>{country.name.common}</h3>

              <h4>Population: {country.population}</h4>

              <h4>Region: {country.region}</h4>

              <h4>Capital: {country.capital}</h4>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Contries;
