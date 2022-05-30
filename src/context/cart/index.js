import React, { createContext, useState } from 'react';

/* Estado para iniciar contexT, default_value será un objeto */

const DEFAULT_VALUE = {
  state: {
    cart: [],
  },

  /* Funcion inicializadora, que cambiará el estado global */
  setState: () => {},
};

/* Creando el contexto y le pasamos DEFAULT_VALUE */
const CartContext = createContext(DEFAULT_VALUE);

/* Para que todos tengan acceso, se genera un Provider: será quien proverá el acceso(recibe children) */
function CartContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
