import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [hunger, setHunger] = useState(0);
  const [health, setHealth] = useState(100);
  const [money, setMoney] = useState(1000);
  const [food, setFood] = useState(100);
  const [sick, setSick] = useState(false);
  const [mood, setMood] = useState(100);

  useEffect(() => {
    const decreaseHunger = () => {
      setHunger((prevHunger) => prevHunger + 10);
      setFood((prevFood) => prevFood - 10);
      setMoney((prevMoney) => prevMoney + 1000);
    };

    const hungerInterval = setInterval(decreaseHunger, 60 * 5);

    return () => clearInterval(hungerInterval);
  }, []);

  return (
    <AppContext.Provider value={{ hunger, health, money, food, sick, mood, setHunger, setHealth, setMoney, setFood, setSick, setMood }}>
      {children}
    </AppContext.Provider>
  );
};
