import { Task } from './functional-types'

const getOpenWeather = (zip) =>
  `http://api.openweathermap.org/data/2.5/forecast?zi)p=${zip},in&APPID=${process.env.WEATHER_API_KEY}`

const fetchIt = (url) =>
  Task((reject, resolve) => fetch(url).then(resolve).catch(reject))

const zip = 400069

fetchIt(getOpenWeather(zip))

//=========== IMPURE CODE :) =============//

const app = () => {
  const goButton = document.getElementById('go')
  const input = document.getElementById('zip')
  const results = document.getElementById('results')

  goButton.addEventListener('click', () => {
    const zipCode = input.value.trim()
    fetchIt(getOpenWeather(zipCode)).fork(console.error, console.log)
  })
}
