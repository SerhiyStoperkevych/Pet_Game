import React from 'react';
import Full from './components/events/Full';
import Health from './components/events/Health';
import State from './components/events/State';
import Pet from './components/Pet';
import Money from './components/events/Money';
import Food from './components/menu/Food';
import Menu from './components/menu/Menu';
import Mood from './components/events/Mood';
import Weather from './components/menu/Weather';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="events" id="events">
        <Full />
        <Health />
        <State />
        <Mood />
        <Money />
      </div>
      <div className="pet" id="pet">
        <Pet />
        <Food />
      </div>
      <div className="menu" id="menu">
        <Menu />
        <Weather />
      </div>
    </AppProvider>
  );
}

export default App;
