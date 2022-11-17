import React, { useContext, useState } from 'react';
import CountriesContext from './../context/CountriesContext';
import { useParams, useNavigate } from 'react-router-dom';
import spinner from '../assets/spinner.gif';

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { results, countries } = useContext(CountriesContext);
  const navigate = useNavigate();
  const query = useParams().name;

  if (isLoading) {
    if (results.length !== 0) {
      setIsLoading(false);
    }
    return (
      <img
        src={spinner}
        alt='spinner'
        className='mx-auto w-12 mt-32 animate-spin'
      />
    );
  }

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countries.filter(
    (result) => result.name.common.toLowerCase() === query
  )[0];

  const curName = Object.values({ ...currencies });
  const currency = Object.values({ ...curName })[0].name;

  return (
    <section className='flex flex-col space-y-10 w-11/12 mx-auto my-12 lg:flex-row lg:space-y-0 lg:space-x-8 lg:mt-28 xl:space-x-16 dark:text-white'>
      <img
        src={flags.png}
        alt='flag'
        className='w-full h-full sm:max-w-lg lg:max-w-md rounded-sm'
      />
      <div className='flex flex-col space-y-8 tracking-wider leading-tight lg:flex-row lg:flex-wrap lg:items-center lg:space-y-0'>
        {/* Section 1 */}
        <div className='w-1/2'>
          <h1 className='font-bold text-2xl'>{name.common}</h1>
          <p className='font-semibold text-sm'>
            Native Name:{' '}
            <span className='font-thin'>
              {Object.values({ ...name.nativeName })[0].common}
            </span>
          </p>
          <p className='font-semibold text-sm'>
            Population:{' '}
            <span className='font-thin'>{population.toLocaleString()}</span>
          </p>
          <p className='font-semibold text-sm'>
            Region: <span className='font-thin'>{region}</span>
          </p>
          <p className='font-semibold text-sm'>
            Sub Region: <span className='font-thin'>{subregion}</span>
          </p>
          <p className='font-semibold text-sm'>
            Capital: <span className='font-thin'>{capital}</span>
          </p>
        </div>
        {/* Section 2 */}
        <div className='w-1/2'>
          <p className='font-semibold text-sm'>
            Top Level Domain: <span className='font-thin'>{tld}</span>
          </p>
          <p className='font-semibold text-sm'>
            Curencies: <span className='font-thin'>{currency}</span>
          </p>
          <p className='font-semibold text-sm'>
            Languages:{' '}
            <span className='font-thin'>
              {Object.values({ ...languages }).join(', ')}
            </span>
          </p>
        </div>
        {/*  Section 3*/}
        {borders !== undefined && (
          <div className='flex flex-col gap-3'>
            <p className='font-semibold'>Border Countries: </p>
            <div className='flex flex-wrap items-center justify-start gap-2'>
              {borders.map((border, index) => {
                const countryName = countries.filter(
                  (result) => result.cca3 === border
                )[0].name.common;
                return (
                  <button
                    className='bg-white w-full py-1 xs:w-4/12 sm:w-5/12 md:w-3/12 lg:w-5/12 lg:text-sm rounded-sm dark:bg-blue-1000 hover:shadow-xl dark:hover:bg-slate-700'
                    key={index}
                    onClick={() =>
                      navigate(`/countries/${countryName.toLowerCase()}`)
                    }
                  >
                    {countryName}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
