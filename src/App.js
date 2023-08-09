import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my website, a developer's workshop!
        </p>
        <a
          className="App-link"
          href="https://alexandrev17.sg-host.com/cv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Philip's CV
        </a>
      </header>
    </div>
  );
}

export default App;
