import logo from './logo.svg';
import './App.css';
import Grocery from './Grocery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
      <Grocery/>
      </p>
    </div>
  );
}

export default App;
