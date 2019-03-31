import React, { Component } from 'react'
import Title from './components/Title/Title'
import Form from './components/Form/Form'
import Weather from './components/Weather/Weather'
import './App.css'

const API_KEY = 'b2916a3a757651b5b75a70112a5bfe10'

class App extends Component {
  state = {
    city: undefined,
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    fetch(process.env.PUBLIC_URL + `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    }))
    .catch(error => this.setState({
      ...this.state,
      error: 'Please enter correct values'
    }))
  }

  render() {
   const {temperature, humidity, city, country, description, error} = this.state
    return (
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={temperature} 
                    humidity={humidity}
                    city={city}
                    country={country}
                    description={description}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;