import { createContext, useState } from 'react';
export const MiContexto = createContext({});

export default function CartContext({ children }) {
  let item = { id: 100, nombre: 'pelota nike', stock: 100, precio: 50 };

  const [darkMode, setDarkMode] = useState(true);

  /* const [carrito, setcarrito] = useState([]); */

  /* function addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  function removeItem(itemId) // Remover un item del cart por usando su id
  function clear() // Remover todos los items
  function isInCart: (id) => i | -1 */

  return <MiContexto.Provider value={{ darkMode, setDarkMode, x: 100, item }}>{children}</MiContexto.Provider>;
}
