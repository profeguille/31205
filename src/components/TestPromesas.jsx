import React, { useEffect, useState } from 'react';

export default function TestPromesas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const pagara = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 'w87er68wer7678ew', monto: 150 },
          { id: '1232423423', monto: 50 },
          { id: '1232423423', monto: 60 },
          { id: '1232423423', monto: 70 },
          { id: '1232423423', monto: 80 },
        ]);
        //rej('NO PAGO!!!!');
      }, 3000);
    });

    pagara
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //TENGO:
  //[{ id: 'w87er68wer7678ew', monto: 150 },{ id: '1232423423', monto: 50 }]

  //QUIERO TENER
  /* <>

    <p>id de pago: w87er68wer7678ew</p>
    <p>monto: 150</p>


    <p>id de pago: 1232423423</p>
    <p>monto: 50</p>
  </>; */

  return (
    <>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Hubo un error en el pago'}</div>
      <div>
        {/* {resultado && (
          <>
            <p>Monto: {resultado.monto}</p>
            <p>id: {resultado.id}</p>
          </>
        )} */}
        {resultado &&
          resultado.map((item) => (
            <>
              <p>id de pago: {item.id}</p>
              <p>monto: {item.monto}</p>
            </>
          ))}
      </div>
    </>
  );
}
