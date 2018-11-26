import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import * as serviceWorker from './serviceWorker';

var post = {
  title: "React is awesome",
  authors:[
    "Nicolas Delforno",
    "Allan Sheep",
    "Anna Watson",
  ],
  body: "Checkout my code!",
  comments:[
    "First!",
    "Great post",
    "Hire this author now!",
  ]
}

ReactDOM.render(
  <Post
  title={post.title}
  Allauthors= {post.authors}
  body={post.body}
  comments={post.comments}
   />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
