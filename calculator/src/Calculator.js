import React, { Component } from 'react';

class Calculator extends Component{

  constructor (props){
    super()
    this.state = {
      num1: "" ,
      num2: "",
      result:""
    }
  }

  saveNum1(e) {
    console.log('this is:', this);
    console.log(e.target.value)
    this.setState({
      num1: e.target.value
    })
  }

  saveNum2(e) {
    console.log('this is:', this);
    console.log(e.target.value)
    this.setState({
      num2: e.target.value
    })
  }

  addNumbers(e){
    console.log(this.state.num1)
    console.log(this.state.num2)
    this.setState({
      result: Number(this.state.num1) + Number(this.state.num2)
    })
    console.log(this.state.result)
  }

  render(){
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number"
          placeholder="enter a number"
          onChange={(e) => this.saveNum1(e)}
          value={this.state.num1} />
          <span>+</span>
          <input type="number"
          placeholder="enter a number"
          onChange={(e) => this.saveNum2(e)}
          value={this.state.num2} />
          <button onClick={(e) => this.addNumbers(e)}>Result </button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
