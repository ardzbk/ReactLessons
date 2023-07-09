import React from 'react'

const City = ({city}) => {
    console.log(city)
  return (
    <div>

        <div class="card text-center mt-3">
            <div class="card-header">
                <h1>{city.name}
            </h1>
            </div>
            <div class="card-body">
                <h1>{city.main.temp}</h1>
                <h1>{city.weather[0].main}</h1>
            </div>
            <div class="card-footer text-body-secondary">
                <h1>{city.weather[0].description}</h1>
            </div>
            </div>
    </div>
  )
}

export default City