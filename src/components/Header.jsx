import React from 'react';

import { BsMoonFill } from 'react-icons/bs';

const Header = () => {
  function toggleMode() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <header className='dark:text-slate-300 dark:bg-blue-1000'>
      <div className='flex items-center justify-between p-7 lg:max-w-4xl lg:mx-auto xl:max-w-7xl'>
        <h1 className='font-bold'>Where in the world?</h1>
        <button className='flex items-center text-sm' onClick={toggleMode}>
          <BsMoonFill className='mr-2' />
          Light Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
