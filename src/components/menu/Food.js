import React, {useContext} from 'react';
import {AppContext} from '../../AppContext'; 

function Food() {

  const { food, setMoney, setFood, setMood } = useContext(AppContext);

  const funFood = (amount) => {
    setMoney((prevMoney) => prevMoney - amount);
    setFood((prevFood) => prevFood + (amount / 5));
    setMood((prevMood) => prevMood + 10);
  };

  return (
    <div>
      <h3>Food Left: {food}</h3>
      <h4>Buy Food:</h4>
      <button onClick={() => funFood(25)}>Light (-$25, +5)</button>
      <button onClick={() => funFood(50)}>Medium (-$50, +10)</button>
      <button onClick={() => funFood(100)}>Heavy (-$100, +20)</button>
    </div>
  );
}

export default Food;
