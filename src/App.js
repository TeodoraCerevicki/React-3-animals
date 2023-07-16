import { useState } from 'react'
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)];
  // Math.random returns decimal number 
  // Math.floor returns integer 
}


function App() {
  const [animalsItem, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animalsItem, getRandomAnimal()]);

    // with [] we are creating new array
    // ...animalsItem - taking existing array
    // getRandomAnimal() - add new random animal
  };

  const renderedAnimals = animalsItem.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  // map - takes every element out of the array, transforms it into new array

  return (
    <div className='animal-app'>
      <button className='primary-button' onClick={handleClick} >Add animal</button>
      <ul className='animal-list'>{renderedAnimals}</ul>
    </div>
  );
}

export default App;
