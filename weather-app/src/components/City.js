import React from 'react'

const City = ({city}) => {
  return (
    <div>

      {city && (
        <ul class="list-group mt-3 w-50 mx-auto">
          <li class="list-group-item">Temperature: {city.main.temp}°C</li>
          <li class="list-group-item">Description: {city.weather[0].description}</li>
          <li class="list-group-item">Humidity: {city.main.humidity}%</li>
          <li class="list-group-item">Wind: {city.wind.speed}km/h</li>
          <li class="list-group-item">
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt=""></img>
          </li>
        </ul>
      )}
    </div>
  )
}

export default City