//@ts-check
import ListadoContainer from './components/ListadoContainer';
import NavBar from './components/NavBar';
import Saludar from './components/Saludar';
import './App.css';

import { useState } from 'react';
import Test from './components/Test';
import TestPromesas from './components/TestPromesas';
function App() {
  const [estaMontado, setEstaMontado] = useState(true);
  return (
    <>
      <TestPromesas />
      {/* {estaMontado ? <Test desde={0} /> : 'DISMOUNT!!!!'}
      <button
        onClick={() => {
          setEstaMontado(false);
        }}
      >
        SACAR A TEST
      </button>

      <button
        onClick={() => {
          setEstaMontado(true);
        }}
      >
        MOSTRAR A TEST
      </button> */}

      {/* <div>
      <NavBar />
      dfsdf
    </div> */}
    </>
  );
}
export default App;
