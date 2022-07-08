import axios from 'axios'
const API_KEY = 'd4c337d46f294107b5e92325220807'
const STORAGE_FORECAST_KEY = 'forecast'

export const weatherService = {
    query
}

async function query(text) {
    try {
        if(!text) return
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${text}&days=1&aqi=no&alerts=no`
        // const { data } = await axios.get(url)
        // const forecast = {
        //     city: data.location.name,
        //     country: data.location.country,
        //     lastUpdate: data.current.last_updated_epoch,
        //     lat: data.location.lat,
        //     lng: data.location.lon,
        //     tempC: data.current.temp_c,
        //     description: data.current.condition.text,
        //     conditions: [
        //         {
        //             type: 'precipitation',
        //             value: data.current.precip_mm,
        //             unit: 'mm'
        //         },
        //         {
        //             type: 'humidity',
        //             value: data.current.humidity,
        //             unit: '%'
        //         },
        //         {
        //             type: 'wind',
        //             value: data.current.wind_kph,
        //             unit: 'km/h'
        //         }
        //     ],
        //     hours: [
        //         {
        //             time: data.forecast.forecastday[0].hour[14].time_epoch,
        //             tempC: data.forecast.forecastday[0].hour[14].temp_c
        //         },
        //         {
        //             time: data.forecast.forecastday[0].hour[15].time_epoch,
        //             tempC: data.forecast.forecastday[0].hour[15].temp_c
        //         },
        //         {
        //             time: data.forecast.forecastday[0].hour[16].time_epoch,
        //             tempC: data.forecast.forecastday[0].hour[16].temp_c
        //         },
        //         {
        //             time: data.forecast.forecastday[0].hour[17].time_epoch,
        //             tempC: data.forecast.forecastday[0].hour[17].temp_c
        //         },
        //         {
        //             time: data.forecast.forecastday[0].hour[18].time_epoch,
        //             tempC: data.forecast.forecastday[0].hour[18].temp_c
        //         }
        //     ]
        // }
        // localStorage.setItem(STORAGE_FORECAST_KEY, JSON.stringify(forecast))
        return JSON.parse(localStorage.getItem(STORAGE_FORECAST_KEY))
        // return forecast
    } catch (err) {
        
    }
}