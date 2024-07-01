import React, { useEffect, useContext } from 'react';
import {AppContext} from '../../AppContext'; 


function Health() {
  
  const { hunger, setHealth, health, mood } = useContext(AppContext);
  
  useEffect(() => {
    const timer = () => {
      setHealth((prevHealth) => prevHealth - (10 / mood));
    };

    if (hunger >= 100) {
      const interval = setInterval(timer, 60 * 100);

      return () => clearInterval(interval);
    }
  }, [hunger, setHealth, mood]);

  return (
    <div className="events" id="events">
      <h1>Pet's Health: {health}</h1>
    </div>
  );
}

export default Health;
