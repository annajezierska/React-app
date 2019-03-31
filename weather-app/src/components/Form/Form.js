import React from 'react'

const Form = ({ getWeather }) => {
    return (
      <div>
        <form onSubmit={getWeather}>
            <input type='text' name='city' placeholder='city'></input>
            <input type='text' name='country' placeholder='country'></input>
            <button>Get Weather</button>
        </form>
      </div>
    )
  }

export default Form;
