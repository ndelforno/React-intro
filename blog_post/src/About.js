import React, { Component } from 'react';

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
      value:"",
      currentTemp: "",
      highTemp: "",
      lowTemp: "",
      currentWeather: "",
      city: ""
    }
  }

  componentDidMount(){
    console.log(this.state.value)
    var base = this
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?zip=${base.state.value},us&appid=052f26926ae9784c2d677ca7bc5dec98`;
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({
          currentTemp: json.main.temp,
          highTemp: json.main.temp_max,
          lowTemp: json.main.temp_min,
          currentWeather: json.weather[0].description,
          city: json.main.name});
      }).catch((ex) => {
        console.log('an error occured while parsing!', ex)
      })
    console.log(this.city)
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }



  render(){
    return (
      <div>
        <h1>About</h1>
        <p>I you want I can tell you what is the weather right now in your area</p>
        <p>Please enter your zip code for the weather:</p>
        <input type="text"
          placeholder="enter your zip Code"
          onChange={(e) => this.handleChange(e)}
          value={this.state.value} />
          <button onClick={(e) => this.componentDidMount(e)}>Get my weather ! </button>
          <p> Current temperature: {this.state.currentTemp}</p>
          <p> Max temperature: {this.state.highTemp}</p>
          <p> Min temperature: {this.state.lowTemp}</p>
          <p> Weather: {this.currentWeather}</p>
          <p> City: {this.city}</p>
      </div>
    )
  }
}

export default About;
