import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Wecome to my site, a developer's workshop.</h1>
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
        <a
          className="App-link"
          href="https://alexandrev17.sg-host.com/cv/"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <h3>Philip's CV</h3>
        </a>
      </header> 
    </div>
  );
}

export default App;
