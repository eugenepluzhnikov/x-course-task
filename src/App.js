import './App.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => alert('click')}>Alert</Button>
    </div>
  );
}

export default App;
