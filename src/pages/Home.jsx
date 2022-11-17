import React from 'react';
import Countries from '../components/Countries';
import Search from '../components/Search';

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <Countries />
    </React.Fragment>
  );
};

export default Home;
