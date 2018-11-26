import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component{
  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <div>
        <h1> {this.props.title}!</h1>
        <p>by {this.props.author} </p>
        <p>{this.props.body}</p>
        <h4>comments:</h4>
        <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}


export default Post;
