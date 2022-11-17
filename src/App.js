import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountriesProvider } from './context/CountriesContext';
import Home from './pages/Home';
import Info from './pages/Info';

const App = () => {
  return (
    <CountriesProvider>
      <main className='flex flex-col min-h-screen bg-gray-100 dark:bg-blue-1100 select-none'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries/:name' element={<Info />} />
          </Routes>
        </BrowserRouter>
      </main>
    </CountriesProvider>
  );
};

export default App;
