import React, { useState} from 'react';

function Menu() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  const menuStyle = {
    display: click ? 'block' : 'none'
  };

  const contentStyle = {
    filter: click ? 'block' : 'none',
    transition: 'filter 0.3s ease'
  };

  return (
    <div style={contentStyle}>
      <button onClick={toggleMenu}>Menu</button>
      <ul style={menuStyle}>
        <li>Settings</li>
        <li>Language</li>
        <li>Levels</li>
      </ul>
    </div>
  );
}

export default Menu;
