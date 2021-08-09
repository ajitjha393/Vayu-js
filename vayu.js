import { Task } from './functional-types'
import { compose } from 'ramda'

const makeWeatherUrl = (zip) =>
  `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},in&APPID=${process.env.WEATHER_API_KEY}`

const fetchIt = (url) =>
  Task((reject, resolve) =>
    fetch(url)
      .then((x) => x.json())
      .then(resolve)
      .catch(reject)
  )

const Vayu = {
  getWeather: compose(fetchIt, makeWeatherUrl)
}

export { Vayu }
