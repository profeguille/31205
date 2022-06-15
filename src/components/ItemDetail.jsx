import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  const [cant, setMostarItemCount] = useState(true);

  /* function onAdd(cant) {
    alert('agregar al carro: ' + cant);
    setMostarItemCount(false);
  } */

  return (
    <div>
      {JSON.stringify(item)}
      {mostarItemCount ? <ItemCount onAdd={onAdd} stock={100} inicial={20} /> : <>finalizar</>}
    </div>
  );
}
