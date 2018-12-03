import React, { Component } from 'react';

function kToC(k){
  var kTemp = k;
  var kToCel = k -  273.15;
  return kToCel;
}

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

  handleSubmit(e){
    console.log(this.state.value)
    var base = this
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?zip=${base.state.value},us&appid=052f26926ae9784c2d677ca7bc5dec98`;
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({
          city: json.name,
          currentTemp: json.main.temp,
          currentWeather: json.weather[0].description,
          highTemp: json.main.temp_max,
          lowTemp: json.main.temp_min
        })
      }).catch((ex) => {
        console.log('an error occured while parsing!', ex)
      })
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }


  render(){
    if (this.state.currentTemp) {
      return (
        <div>
          <h1>About</h1>
          <p>I you want I can tell you what is the weather right now in your area</p>
          <p>Please enter your zip code for the weather:</p>
          <input type="text"
            placeholder="enter your zip Code"
            onChange={(e) => this.handleChange(e)}
            value={this.state.value} />
            <button onClick={(e) => this.handleSubmit(e)}>Get my weather ! </button>
            <p> Current temperature: {Math.round(kToC(this.state.currentTemp))}</p>
            <p> Max temperature: {Math.round(kToC(this.state.highTemp))}</p>
            <p> Min temperature: {Math.round(kToC(this.state.lowTemp))}</p>
            <p> Weather: {this.state.currentWeather}</p>
            <p> City: {this.state.city}</p>
        </div>
      )
    }
    return (
      <div>
        <h1>About</h1>
        <p>I you want I can tell you what is the weather right now in your area</p>
        <p>Please enter your zip code for the weather:</p>
        <input type="text"
          placeholder="enter your zip Code"
          onChange={(e) => this.handleChange(e)}
          value={this.state.value} />
          <button onClick={(e) => this.handleSubmit(e)}>Get my weather ! </button>
      </div>
    )
  }
}

export default About;
