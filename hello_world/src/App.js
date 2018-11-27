//bring in React and Componenet from React

import React, {Component} from 'react';

// define Hello word Component
class Hello extends Component{
  // what should happen when the component is first created
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define initial state
    this.state = {
      moodPoints : 1 //initialize this.state.moodPoints to be 1
    }
  }

  increaseMood(e) {
    if (this.state.moodPoints == 10) {
      this.state = {
        moodPoints : 0 //initialize this.state.moodPoints to be 1
      }
    }
    this.setState({
      moodPoints: this.state.moodPoints + 1
    });
  }

  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>You are {this.props.age} years old </h3>
        <p>You love : {this.props.animals[0]}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)} > Cheer up !</button>
      </div>
    )
  }
}



export default Hello
