import React from 'react';
import Details from '../components/Details';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Info = () => {
  return (
    <div className='mx-6 lg:mx-0'>
      <div className='my-7 lg:max-w-4xl lg:mx-auto xl:max-w-7xl '>
        <Link
          to='/'
          className='mx-3 flex items-center w-32 space-x-2 bg-white py-1.5 px-7 rounded-md shadow-lg hover:shadow-xl focus:outline-none dark:bg-blue-1000 dark:text-white dark:hover:bg-slate-700'
        >
          <BsArrowLeft />
          <span>Back</span>
        </Link>

        <Details />
      </div>
    </div>
  );
};

export default Info;
