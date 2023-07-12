import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import Animal from './data/animal';
import catData from './data/catData';
import dogData from './data/dog-data';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);

  const numberOfCats = cats.length;
  const numberOfDogs = dogs.length;

  return (
    <>
      <Navbar />
      <Header numberOfCats={numberOfCats} numberOfDogs={numberOfDogs} />

      <main>
        <h2 className='header__title'>Cats!</h2>
        <div className='cards__wrapper'>
          {cats.map((cat, index) => (
            <Card animal={cat} index={index} key={cat.id} type='cat' />
          ))}
        </div>
        <h2 className='header__title'>Dogs!</h2>
        <div className='cards__wrapper'>
          {dogs.map((dog, index) => (
            <Card animal={dog} index={index} key={dog.id} type='dog' />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
