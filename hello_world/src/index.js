import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js'
import * as serviceWorker from './serviceWorker';

var person ={
  personName: "Nick",
  personAge: 24,
  favorites: [
    "Capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}

ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge}
  animals={person.favorites}
  />,
   document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
