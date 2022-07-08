import { utilService } from '../services/util.service'

export function WeatherTitle({ city, country, date }) {

    const dateToDisplay = (utcSeconds) => {
        return utilService.formatDate(utcSeconds, true)
    }

    return (
        <div className="weather-title">
            <span className="weather-city">{city}</span>
            <span className="weather-country">{country}</span>
            <span className="weather-date">{dateToDisplay(date)}</span>
        </div>
    )
}