import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

function App() { 
  return (
      <Home/>
  );
}

export default App;
