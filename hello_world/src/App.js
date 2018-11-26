//bring in React and Componenet from React

import React, {Component} from 'react';

// define Hello word Component
class Hello extends Component{
  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>You are {this.props.age} years old </h3>
        <p>You love : {this.props.animals[0]}</p>
      </div>
    )
  }
}

export default Hello
