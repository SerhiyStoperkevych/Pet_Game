import React, {useContext} from 'react';
import {AppContext} from '../../AppContext'; 

function Money() {
  
  const {money, setMoney} = useContext(AppContext);
  
  const job = () => {
    setMoney((prevMoney) => prevMoney + 100);
  };

  return (
    <>
      <h1>Your money: {money}</h1>
      <div>
        <button onClick={job}>Get Money</button>
      </div>
      {money < -1000 && <p>You have lost</p>}
    </>
  );
}

export default Money;
