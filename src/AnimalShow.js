import { useState } from 'react';

import './AnimalShow.css';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};
// in object if key is identical to the value it can be defined as one word, no need for bird: bird

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0); 
    const handleClick = () => {
      setClicks(clicks + 1);
    };

    return (
      <li className='animal-item' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]} />
        <img className='heart' alt='heart' src={heart} style={{width: 10 + 10 * clicks + 'px'}} />
      </li>
    );
  }
  
  export default AnimalShow;