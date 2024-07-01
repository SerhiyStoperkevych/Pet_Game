import React, { useEffect, useContext } from 'react';
import {AppContext} from '../../AppContext'; 

function State() {
  
  const { hunger,setHealth, sick, setSick } = useContext(AppContext);
  
  useEffect(() => {
    const meds = () => {
      if (hunger >= 100) {
        setSick(true);
        setHealth((prevHealth) => prevHealth - 10);
      }
    };

    const interval = setInterval(meds, 60 * 100);

    return () => clearInterval(interval);
  }, [hunger, setHealth, sick, setSick]);

  return (
    <div className="events" id="events">
      <h1>Your Pet is Sick: {sick ? 'Yes' : 'No'}</h1>
    </div>
  );
}

export default State;
