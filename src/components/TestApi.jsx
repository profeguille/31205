import React, { useEffect } from 'react';

export default function TestApi() {
  //declarar un estado
  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        //setear el estado con la data correspondiente
        console.log(data);
      })
      .catch((e) => {
        console.log('salio mal', e);
      })
      .finally(() => {
        //console.log('fin');
      });
  }, []);

  return <div>{'mostrar la data que tengo en el estado'}</div>;
}
