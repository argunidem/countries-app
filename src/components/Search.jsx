import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';
import { BiSearch, BiChevronDown } from 'react-icons/bi';

const Search = () => {
  const { searchHandler, filterRegion, toggleFilter } =
    useContext(CountriesContext);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <section>
      <div className='my-8 px-6 flex flex-col space-y-8 md:space-y-0 sm:items-center md:flex-row md:items-center md:justify-between lg:px-0 lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
        <div className='flex items-center bg-white w-full sm:w-96 space-x-4 p-3 rounded-lg dark:bg-blue-1000 dark:text-slate-300 group hover:bg-gray-200 dark:hover:bg-slate-700'>
          <BiSearch
            size='25px'
            className='ml-5 text-slate-400 dark:text-white cursor-pointer'
          />

          <input
            className='w-full focus:outline-0 leading-8 select-text dark:bg-blue-1000 dark:placeholder:text-white group-hover:bg-gray-200 dark:group-hover:bg-slate-700'
            type='search'
            placeholder='Search a country...'
            onChange={searchHandler}
          />
        </div>

        <div className='w-56 h-14 z-20 self-start sm:self-center'>
          <div
            className='cursor-pointer h-12 px-4 bg-white flex justify-between items-center rounded-md font-semibold text-sm dark:text-slate-300 dark:bg-blue-1000 hover:bg-gray-200 dark:hover:bg-slate-700'
            onClick={toggleFilter}
          >
            <div className='select-none'>Filter by Region</div>
            <BiChevronDown
              size='25px'
              className='text-slate-700 dark:text-slate-300'
            />
          </div>
          <div
            id='menu'
            className='rounded-md font-semibold text-sm mt-1 bg-white dark:text-slate-300 dark:bg-blue-1000 transition-all duration-300 opacity-0 h-0'
          >
            {regions.map((region, index) => {
              return (
                <div
                  key={index}
                  className='hidden rounded-md px-4 py-1 cursor-pointer select-none hover:bg-gray-200 dark:hover:bg-slate-700'
                  onClick={filterRegion}
                >
                  {region}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
