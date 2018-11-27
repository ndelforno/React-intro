import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js'

class Post extends Component{
  constructor (props){
    super()
    this.state = {
      body: "Checkout my code!"
    }
  }
  changeBody(e){
    var userInput = prompt("What is the new body ?")
    this.setState({
      body: userInput
    })
  }
  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <div>
        <h1> {this.props.title}!</h1>
        <Author body={this.props.Allauthors[0]} />
        <Author body={this.props.Allauthors[1]} />
        <Author body={this.props.Allauthors[2]} />
        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)} > Edit body </button>
        <h3>comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}


export default Post;
