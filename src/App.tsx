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

  const [animalName, setAnimalName] = useState<string>('');
  const [species, setSpecies] = useState<string>('');
  const [favFoods, setFavFoods] = useState<Array<string>>([]);
  const [birthYear, setBirthYear] = useState<number>(0);
  const [animalType, setAnimalType] = useState<string>('');

  const handleClick = (e: any) => {
    e.preventDefault();
    const newAnimal: Animal = {
      name: animalName,
      species: species,
      favFoods: favFoods,
      birthYear: birthYear,
    };
    animalType === 'cat'
      ? setCats([...cats, newAnimal])
      : setDogs([...dogs, newAnimal]);
  };

  return (
    <>
      <Navbar />
      <Header numberOfCats={numberOfCats} numberOfDogs={numberOfDogs} />
      <form action='/'>
        <label htmlFor='animalName'>Animal name:</label>
        <input
          type='text'
          id='animalName'
          name='animalName'
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />

        <label htmlFor='species'>Species:</label>
        <input
          type='text'
          id='species'
          name='species'
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <input
          type='number'
          id='birthYear'
          name='birthYear'
          value={birthYear}
          onChange={(e) => setBirthYear(parseInt(e.target.value))}
        />
        <label>
          Animal Type:
          <select
            name='animalType'
            id='animalType'
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value='none'>Please select:</option>
            <option value='cat'>Cat</option>
            <option value='dog'>Dog</option>
          </select>
        </label>

        <input type='submit' value='Submit' onClick={handleClick} />
      </form>
      <main>
        <h2 className='header__title'>Cats!</h2>
        <ul className='cards__wrapper'>
          {cats.map((cat, index) => (
            <Card animal={cat} index={index} key={cat.id} type='cat' />
          ))}
        </ul>
        <h2 className='header__title'>Dogs!</h2>
        <ul className='cards__wrapper'>
          {dogs.map((dog, index) => (
            <Card animal={dog} index={index} key={dog.id} type='dog' />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
