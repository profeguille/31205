import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hijo1DeHome from './Hijo1DeHome';

export default function Home() {
  useEffect(() => {
    window.addEventListener('resize', alert);

    return () => {
      window.removeEventListener('resize', alert);
    };
  }, []);

  return (
    <div>
      Home
      {/* <a href="/contacto">ir a contacto</a> */}
      <Link to="/contacto">ir a contacto</Link>
      <Hijo1DeHome />
      <Hijo1DeHome />
      <Hijo1DeHome />
      <Hijo1DeHome />
      <Hijo1DeHome />
    </div>
  );
}
