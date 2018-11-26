//bring in React and Componenet from React

import React, {Component} from 'react';

// define Hello word Component
class Hello extends Component{
  // what should the component render?
  render(){
    //make sure to return some UI
    return(
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
