//@ts-check
import { useState } from 'react';
import './App.css';
import TestApi from './components/TestApi';
import TestPromesas from './components/TestPromesas';

function App() {
  const [estaMontado, setEstaMontado] = useState(true);
  return (
    <>
      {/* <TestApi /> */}
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
