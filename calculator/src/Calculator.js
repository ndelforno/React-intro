import React, { Component } from 'react';

class Calculator extends Component{

  constructor (props){
    super()
    this.state = {
      num1:"" ,
      num2: ""
    }
  }

  render(){
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text"
          placeholder="enter a number"
          value={this.state.num1} />
          <span>+</span>
          <input type="text"
          placeholder="enter a number"
          value={this.state.num2} />
          <span>=</span>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
