import React from 'react';
import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';

export default function HijoDelHijoDeHome() {
  //{ darkMode, setDarkMode, x: 100, item, handleClickApp }
  const { darkMode, setDarkMode } = useContext(MiContexto);

  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
      HijoDelHijoDeHome
      <button onClick={() => setDarkMode(!darkMode)}>cambiar dark mode</button>
    </div>
  );
}
