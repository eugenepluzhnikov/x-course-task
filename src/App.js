import './App.scss';
import {RouterProvider} from "react-router-dom";
import {router} from './Router';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';


const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="page">
        <RouterProvider router={router} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
