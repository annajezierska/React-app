import React, { Component } from 'react'
import Title from './components/Title/Title'
import Form from './components/Form/Form'
import Weather from './components/Weather/Weather'
import './App.css'

const API_KEY = 'b2916a3a757651b5b75a70112a5bfe10'

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric~]`)
    const data = await api_call.json()
    console.log(data)
  }

  render() {
    return (
      <div className="App">
       <Title />
       <Form getWeather={this.getWeather}/>
       <Weather />
      </div>
    );
  }
}

export default App;
