
const zip = 400069  
const fetchIt = url => fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},in&APPID=${process.env.WEATHER_API_KEY}`
)

fetchIt()
.then(res => res.json())
.then(console.log)