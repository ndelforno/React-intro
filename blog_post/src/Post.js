import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';

class Post extends Component{
  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <div>
        <h1> {this.props.title}!</h1>
        <p>by {this.props.author} </p>
        <p>{this.props.body}</p>
        <h3>comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}


export default Post;
