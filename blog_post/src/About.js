import React, { Component } from 'react';

class About extends Component {
  render() {

    constructor (props){
      super()
      this.state = {
        wheather: ""
      }
    }

    componentDidMount(){
      var base = this
      let poemApi = 'http://ShakeItSpeare.com/api/poem';
      fetch(poemApi)
        .then((response) => {
          return response.json()
        }).then((json) => {
          base.setState({shakeSpeare: json.poem});
        }).catch((ex) => {
          console.log('an error occured while parsing!', ex)
        })
    }

    return (
      <div>
        <h1>About</h1>
        <p>
        I you want I can tell you what is the weather right now in your area
        <p>Please enter your zip code for the weather:</p>
        <form>
          <label>
            Postal code:
            <input type="text" name="Postal Code" />
          </label>
          <input type="submit" value="Get my weather" />
        </form>
        </p>
      </div>
    )
  }
}

export default About;
