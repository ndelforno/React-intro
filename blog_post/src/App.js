import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';
import Post from './Post';
import FavoriteMovies from './FavoriteMovies';
import FavoriteFood from './FavoriteFood';
import About from './About';

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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/Post">My Blog</Link>{' '}
            <Link to="/FavoriteMovies">Favorite Movies</Link>{' '}
            <Link to="/FavoriteFood">Favorite food</Link>{' '}
            <Link to="/About">About</Link>
          </nav>
          <Route exact path="/" component={Homepage} />
          <Route path="/Post" component={
            () => (<Post title={post.title}
            Allauthors= {post.authors}
            body={post.body}
            comments={post.comments} />
          )}/>
          <Route path="/FavoriteMovies" component={FavoriteMovies} />
          <Route path="/FavoriteFood" component={FavoriteFood} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
