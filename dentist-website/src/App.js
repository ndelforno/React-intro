import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Procedures></Procedures>
        <Contact></Contact>
      </div>
    )
  }
}

export default App;
