import React from 'react';

export default function TestEventos() {
  function handleClick(e, id) {
    //console.log(e);
    e.stopPropagation();
    alert('click en: ' + id);
  }

  return (
    <>
      <div onClick={(e) => handleClick(e, 1)} style={{ border: '1px solid red' }}>
        prodcuto 1
      </div>
      <p onClick={(e) => handleClick(e, 2)} style={{ border: '1px solid red' }}>
        producto 2
      </p>
    </>
  );
}
