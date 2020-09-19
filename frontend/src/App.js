import React from 'react';
import './App.css';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Navbar from './Components/Navbar'
import Studies from './Components/Studies/Estudies'
import { Parallax, Background } from 'react-parallax';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Parallax
        bgImage={require('./img/op6lxuawjech4i0fwflqvwwyegt8fv1qqlhcgcyqiqtdsurjiyjcs3kpbfbib31w-.jpg')}
        bgImageAlt="the cat"
        strength={500}>
        <About></About>
      </Parallax>
      <Studies></Studies>
      <Portfolio></Portfolio>

    </div>
  );
}

export default App;
