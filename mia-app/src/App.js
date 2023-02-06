import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import Heading from './components/Heading';
import ButtonComponent from "./components/buttonComponent.jsx";
import ImageComponent from './components/imageComponent';

function App() {
  return (
    <div className="App">
      <Heading title="Introduzione a react" />
      <Heading title="STATE, map() & Bootstrap" />
      <Heading title="Controlled, inputs and forms" />
      <ButtonComponent  testo ="questo è il testo all'interno del bottone" />
      <ImageComponent url="https://placekitten.com/500/500" alt="cat pic" />
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
      
    </div>
  );
}
// ogni componente DEVE ritornare UN SINGOLO ELEMENTO
export default App;
//importante per esportare il file