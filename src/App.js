import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';

const App = () => {
  return (
    <main className='flex flex-col min-h-screen bg-gray-100 dark:bg-blue-1100'>
      <Header />
      <Search />
      <Countries />
    </main>
  );
};

export default App;
