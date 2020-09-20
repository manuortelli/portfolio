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
        </Parallax>
        <br></br>
        <Parallax bgImage={require('./img/wp4405841.jpg')}
          bgImageAlt="the cat"
          strength={400}>
          <Studies />
        </Parallax>
        <br></br>
        <Parallax bgImage={require('./img/hammer_blacksmith_metal-44193.jpg')}
          bgImageAlt="the cat"
          strength={400}>
        <Experience />
        </Parallax>


      </div>
    </Router>
  );
}

export default App;
