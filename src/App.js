import React from 'react'; 
import './App.css';
import logo from './logo.svg'; 
import Ajax from "./Ajax.js"
import ApiComponent from './ApiComponent';
import Hook from './Hook';
import Routage from './Routage';

function App() { 

  const myStyle = {
    framework: "white",
    backgroundframework: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
      <h1 style={myStyle}>Wecome to my site, a developer's workshop!</h1> 
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <nav>
          <Hook />
      </nav>
        <main> 
          <Ajax />
          <ApiComponent />  
        </main>
        <footer>
          <Routage />
          <a
            className="App-link"
            href="https://alexandrev17.sg-host.com/cv/"
            target="_blank"
            rel="noopener noreferrer"
          > 
          <h3>Philip's CV</h3>
        </a>
        </footer> 
    </div>
    </>
  );
}

export default App;
