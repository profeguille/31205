import React from 'react';

export default function ItemCount({ onAdd }) {
  return (
    <>
      <div>-</div>
      <div>estado</div>
      <div>+</div>
      <div onClick={() => onAdd(35)}>AGREGAR AL CARRO</div>
    </>
  );
}
