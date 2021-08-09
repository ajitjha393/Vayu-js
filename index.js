import { Vayu } from './vayu'

//=========== IMPURE CODE :) =============//

const app = () => {
  const goButton = document.getElementById('go')
  const input = document.getElementById('zip')
  const results = document.getElementById('results')

  goButton.addEventListener('click', () => {
    const zipCode = input.value.trim()
    Vayu.getWeather(zipCode).fork(console.error, console.log)
  })
}

app()
