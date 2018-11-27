import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList.js';
import * as serviceWorker from './serviceWorker';

var toDos = ["Train on React", "Search for job", "Go to the gym"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
