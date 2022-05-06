import logo from "./logo.svg";
import CardCollection from "./components/card-collection";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      </header>
      <div className="container">
        <span className="cluster">
          <CardCollection />
        </span>
        <span className="cluster">
          <CardCollection />
        </span>
      </div>
    </div>
  );
}

export default App;
