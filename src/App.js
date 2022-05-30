import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routing from './routes';
import GlobalStyle from './styles/global';
import { CartContextProvider } from './context/cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
        <GlobalStyle />
      </CartContextProvider>
    </div>
  );
}

export default App;
