import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import catData from './data/catData';
import CatCard from './components/cat_card';

import Dog from './data/dog';
import dogData from './data/dog-data';
import DogCard from './components/dog_card';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const numberOfCats = cats.length;
  const numberOfDogs = dogs.length;

  return (
    <>
      <Navbar />
      <Header numberOfCats={numberOfCats} numberOfDogs={numberOfDogs} />

      <main>
        <div className='cards__wrapper'>
          {cats.map((cat, index) => (
            <CatCard catObject={cat} catIndex={index} key={cat.id} />
          ))}
          {dogs.map((dog, index) => (
            <DogCard dogObject={dog} dogIndex={index} key={dog.id} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
