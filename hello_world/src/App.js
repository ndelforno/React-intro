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
        <h3>It is time for tea </h3>
      </div>
    )
  }
}

export default Hello
