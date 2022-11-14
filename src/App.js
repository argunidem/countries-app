import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';
import { CountriesProvider } from './context/CountriesContext';

const App = () => {
  return (
    <main className='flex flex-col min-h-screen bg-gray-100 dark:bg-blue-1100 select-none'>
      <CountriesProvider>
        <Header />
        <Search />
        <Countries />
      </CountriesProvider>
    </main>
  );
};

export default App;
