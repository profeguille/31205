import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
}
