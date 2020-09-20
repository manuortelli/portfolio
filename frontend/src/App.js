import React from 'react';
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar';
import Studies from './Components/Studies/Studies';
import Experience from './Components/Experience/Experience';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Parallax
          bgImage={require('./img/op6lxuawjech4i0fwflqvwwyegt8fv1qqlhcgcyqiqtdsurjiyjcs3kpbfbib31w-.jpg')}
          bgImageAlt="the cat"
          strength={700}>
          <About />
          <hr className="mt-2 mb-3" />
          <Studies />
          <Experience/>
        </Parallax>

      </div>
    </Router>
  );
}

export default App;
