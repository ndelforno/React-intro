import React, { Component } from 'react';

class About extends Component {

    constructor(props){
      super(props)
      this.state = {
        currentTemp: "",
        highTemp: "",
        lowTemp: "",
        currentWeather: "",
        city: ""
      }
    }

    componentDidMount(){
      var zip = event.target.value
      var base = this
      let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip={zip},us&appid=052f26926ae9784c2d677ca7bc5dec98';
      fetch(weatherApi)
        .then((response) => {
          return response.json()
        }).then((json) => {
          base.setState({
            currentTemp: json.main.temp,
            highTemp: json.main.temp_max,
            lowTemp: json.main.temp_min,
            currentWeather: json.weather[0].description,
            city: json.name});
        }).catch((ex) => {
          console.log('an error occured while parsing!', ex)
        })
    }

render() {
    let temperature = this.state.currentTemp
    let maxtemp = this.state.highTemp
    let mintemp = this.state.lowTemp
    let description = this.currentWeather
    let city = this.city
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
          <p> Current temperature: {temperature}</p>
          <p> Max temperature: {maxtemp}</p>
          <p> Min temperature: {mintemp}</p>
          <p> Weather: {description}</p>
          <p> City: {city}</p>
      </div>
    )
  }
}

export default About;
