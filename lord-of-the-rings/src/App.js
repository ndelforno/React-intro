import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Movie title="The Fellowhsip of the Ring" hours="2" minutes="58"></Movie>
          <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
          <Movie title="The Return of the King" hours="3" minutes="21"></Movie>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
