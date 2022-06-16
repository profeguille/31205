import React from 'react';
import HijoDelHijoDeHome from './HijoDelHijoDeHome';
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';

export default function Hijo1DeHome() {
  const { darkMode } = useContext(MiContexto);
  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
      Hijo1DeHome
      <HijoDelHijoDeHome />
    </div>
  );
}
