import './App.scss';
import { Router } from './Router';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


const App = () => {
  return (
    <main className="app">
      <Header />
      <Router />
      <Footer />
    </main>
  );
}

export default App;
