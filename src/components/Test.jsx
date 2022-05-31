import React, { useState, useEffect } from 'react';

export default function Test({ desde }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //MOUNT: solo la primera vez
  useEffect(() => {
    alert('se monto el componente la primera vez!!');

    //DISMOUNT
    return () => {
      alert('muere o dismount');
    };
  }, []);

  //EN CADA CAMBIO (y la primera vez)
  useEffect(() => {
    console.log('render');
  });

  //EN CADA CAMBIO DONDE CAMBIE LA X SOLAMENTE (y la primera vez)
  useEffect(() => {
    if (x == 10) {
      alert('x = 10 es mucho!!');
    }
  }, [x]);

  //console.log('render');
  return (
    <>
      <div style={{ border: '1px solid red', height: '200px', backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0') }}>
        Contador x: {x}
        Contador y: {y}
        <br />
        <button
          onClick={() => {
            /* x = x + 1; */
            setX(x + 1);
          }}
        >
          SUMAR
        </button>
        <button
          onClick={() => {
            setY(y + 1);
          }}
        >
          SUMAR Y
        </button>
      </div>
    </>
  );
}
