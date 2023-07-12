import { useState } from 'react';
import catData from './data/catData';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import CatCard from './components/cat_card';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);

  const numberOfCats = cats.length;

  return (
    <>
      <Navbar />
      <Header numberOfCats={numberOfCats} />

      <main>
        <div className='cards__wrapper'>
          {cats.map((cat, index) => (
            <CatCard catObject={cat} catIndex={index} key={cat.id} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
