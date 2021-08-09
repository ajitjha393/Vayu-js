import { Vayu } from './vayu'

const Weather = (dt, temp) => ({ dt, temp })

const toFahrenheit = (k) => (k - 273.15) * 1.8 + 32

const toWeather = (dt, temp) =>
  Weather(new Date(dt).toLocaleDateString(), toFahrenheit(temp))

const prepareItems = (w) => toWeather(w.dt, w.main.temp)

const getWeatherItems = (zip) =>
  Vayu.getWeather(zip)
    .map((json) => json.list.map(prepareItems))
    .map((weather) => weather.map(toLi))

const toLi = (weather) => `<li>${weather.dt} ${weather.temp}</li>`

//=========== IMPURE CODE :) =============//

const app = () => {
  const goButton = document.getElementById('go')
  const input = document.getElementById('zip')
  const results = document.getElementById('results')

  goButton.addEventListener('click', () => {
    const zipCode = input.value.trim()
    getWeatherItems(zipCode).fork(console.error, (html) => {
      results.innerHTML = html
    })
  })
}

app()
