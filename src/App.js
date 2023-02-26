import { useState, useEffect } from 'react';
import './App.scss';
import { Router } from './Router';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { UserContext, CartContext} from './context/context';
import {LOCAL_STORAGE} from './App.constants'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem(LOCAL_STORAGE.USER) || null);
  const localStorageCart = localStorage.getItem(LOCAL_STORAGE.CART)
  const [cart, setCart] = useState(localStorageCart ? JSON.parse(localStorageCart) : []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE.CART, JSON.stringify(cart))
  }, [cart])
  return (
    <main className="app">
      <UserContext.Provider value={[user, setUser]}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header />
          <Router />
        </CartContext.Provider>
      </UserContext.Provider>
      <Footer />

    </main>
  );
}

export default App;
