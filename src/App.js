import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 
import NoPage from "./pages/NoPage";
import Ajax from "./Ajax.js"

function App() {

  const [framework, setframework]= useState("React.js");

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} /> 
            <Route path="contact" element={<Contact />} /> 
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <nav>
      <h1>My favorite framework is {framework}!</h1>
        
        <button 
          type="button"
          onClick ={() =>setframework("ASP.NET")}
        >ASP.NET</button>
        <button 
          type="button"
          onClick ={() =>setframework("Node.js")}
        >Node.js</button>
        <button 
          type="button"
          onClick ={() =>setframework("Angular")}
        >Angular</button>

        <button 
          type="button"
          onClick ={() =>setframework("Ruby on Rails")}
        >Ruby on Rails</button>  
        </nav>
        <main>
          <Ajax />  
        </main>
        <footer>
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
