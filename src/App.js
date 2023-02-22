import { useState } from 'react';
import './App.scss';
import { Router } from './Router';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { UserContext, CartContext} from './context/context';



const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [cart, setCart] = useState([]);
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
