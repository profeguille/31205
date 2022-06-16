//@ts-check
import { createContext, useState } from 'react';
import './App.css';
import TestApi from './components/TestApi';
import TestPromesas from './components/TestPromesas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacto from './components/Contacto';
import TestProducto from './components/TestProducto';
import TestCategoria from './components/TestCategoria';
import TestEventos from './components/TestEventos';
import ItemDetail from './components/ItemDetail';
import CartContext from './context/CartContext';

export default function App() {
  function handleClickApp() {
    alert('click en la APP');
  }

  return (
    <>
      <CartContext>
        {/* <ItemDetail item={item} /> */}
        <div onClick={handleClickApp}>
          <BrowserRouter>
            NAVBAR
            <Routes>
              <Route path="/testeventos" element={<TestEventos />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/producto/:id" element={<TestProducto />} />
              <Route path="/categoria/:id" element={<TestCategoria />} />
            </Routes>
            FOOTER
          </BrowserRouter>
        </div>
      </CartContext>
    </>
  );
}
