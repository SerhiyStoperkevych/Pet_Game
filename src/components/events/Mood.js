import React, { useEffect , useContext} from 'react';
import {AppContext} from '../../AppContext'; 

function Mood() {
  
  const { mood, setMood, hunger, health } = useContext(AppContext);
  
  useEffect(() => {
    if (hunger > 40 || health < 60) {
      setMood((prevMood) => prevMood - 10);
    }
  }, [hunger, health, mood, setMood]);

  return (
    <>
      <h1>Pet's Mood: {mood}</h1>
      {mood < 60 && <p>Your pet is depressed</p>}
    </>
  );
}

export default Mood;
