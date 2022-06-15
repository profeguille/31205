import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TestProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    if (id == 100) {
      setProducto({ id: 100, name: 'juan maria', price: 'gold' });
    } else if (id == 101) {
      setProducto({ id: 101, name: 'rodri', price: 'tin' });
    } else if (id == 102) {
      setProducto({ id: 102, name: 'luka', price: 'silver' });
    }
  }, [id]);

  return (
    <div>
      <Link to={'/producto/100'}>ir a 100 </Link>
      <br />
      <Link to={'/producto/101'}>ir a 101</Link>
      <br />
      <Link to={'/producto/102'}>ira a 102</Link>
      <br />
      <br />
      <br />
      {producto && <div>{JSON.stringify(producto)}</div>}
    </div>
  );
}
