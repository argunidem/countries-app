import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountriesProvider } from './context/CountriesContext';
import Home from './pages/Home';
// import Result from './pages/Result';
// import CountryCard from './pages/CountryCard';

const App = () => {
  return (
    <CountriesProvider>
      <main className='flex flex-col min-h-screen bg-gray-100 dark:bg-blue-1100 select-none'>
        <BrowserRouter>
          <Header />
          <Search />
          <Routes>
            <Route path='/' element={<Home />} />
            {/*<Route path='/result' element={<Result />} />
            <Route path='/country' element={<CountryCard />} />
            <Route path='/filter' element={<Filter />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </CountriesProvider>
  );
};

export default App;
