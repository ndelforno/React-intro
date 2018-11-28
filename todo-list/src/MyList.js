import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {

  constructor (props){
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  addItem (e){
    e.preventDefault();
    var newArray = this.state.toDoItemArray
    newArray.push(this.state.newItem)
    this.setState({toDoItemArray: newArray,newItem: ''})
  }

  newItemChange (e){
    console.log("item changed")
    this.setState({
      newItem: e.target.value
    })
  }

  clearList (e){
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    });
  }

  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
          <ListItem doThis={item} key={index} />
    ))
    return (
      <div>
        <h1> Things to do:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form name="myForm">
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    );
  }
}

export default MyList;
