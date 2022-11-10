import React from 'react';
import { BiSearch, BiChevronDown } from 'react-icons/bi';

const Search = () => {
  return (
    <section>
      <div className='flex flex-col my-8 mx-6 space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
        <div className='flex items-center max-w-md space-x-4 p-3 rounded-lg dark:bg-blue-1000 dark:text-slate-300'>
          <BiSearch
            size='25px'
            className='ml-5 text-slate-400 dark:text-white cursor-pointer'
          />

          <input
            className='focus:outline-0 leading-8 w-4/5 dark:bg-blue-1000 dark:placeholder:text-white'
            type='search'
            placeholder='Search a country...'
          />
        </div>

        <div className='relative w-60 h-14'>
          <BiChevronDown
            size='25px'
            className='absolute right-5 top-3 z-10 text-slate-700 dark:text-slate-300'
          />
          <select className='focus:outline-0 focus:border-0 w-full h-full px-6 rounded-lg appearance-none font-semibold text-sm dark:bg-blue-1000 dark:text-slate-300'>
            <option value=''>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Search;
