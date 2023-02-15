import { useState } from 'react';
import './App.scss';
import { Router } from './Router';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { UserContext } from './context/context';


const App = () => {
  const [user, setUser] = useState(null);
  return (
    <main className="app">
      <UserContext.Provider value={[user, setUser]}>
        <Header />
        <Router />
        <Footer />
      </UserContext.Provider>
    </main>
  );
}

export default App;
