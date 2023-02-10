import './App.scss';
import {RouterProvider} from "react-router-dom";
import {router} from './Router';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="page">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
