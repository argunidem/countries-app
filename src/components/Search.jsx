import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';
import { BiSearch, BiChevronDown } from 'react-icons/bi';

const Search = () => {
  const { searchHandler } = useContext(CountriesContext);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const toggleFilter = () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('opacity-0')) {
      menu.classList.remove('opacity-0', 'h-0');
      menu.classList.add('opacity-100', 'h-36');
    } else if (menu.classList.contains('opacity-100')) {
      menu.classList.remove('opacity-100', 'h-36');
      menu.classList.add('opacity-0', 'h-0');
    }
  };

  return (
    <section className='my-8 mx-6'>
      <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
        <div className='flex items-center bg-white w-96 space-x-4 p-3 rounded-lg dark:bg-blue-1000 dark:text-slate-300 group hover:bg-gray-200 dark:hover:bg-slate-700'>
          <BiSearch
            size='25px'
            className='ml-5 text-slate-400 dark:text-white cursor-pointer'
          />

          <input
            className='w-full focus:outline-0 leading-8 select-text dark:bg-blue-1000 dark:placeholder:text-white group-hover:bg-gray-200 dark:group-hover:bg-slate-700'
            type='search'
            placeholder='Search a country...'
            onKeyDown={searchHandler}
          />
        </div>

        <div className='w-56 h-14 z-20'>
          <div
            className='cursor-pointer h-12 px-4 mb-1 bg-white flex justify-between items-center rounded-md font-semibold text-sm dark:text-slate-300 dark:bg-blue-1000 hover:bg-gray-200 dark:hover:bg-slate-700'
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
            className='rounded-md font-semibold text-sm bg-white dark:text-slate-300 dark:bg-blue-1000 transition-all duration-500 opacity-0 h-0'
          >
            {regions.map((region, index) => {
              return (
                <div
                  key={index}
                  className='rounded-md px-4 py-1 cursor-pointer select-none hover:bg-gray-200 dark:hover:bg-slate-700'
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
