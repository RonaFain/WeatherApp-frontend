import { utilService } from '../services/util.service'

export function WeatherHourPreview({ hour }) {

    const formatTime = (timestamp) => {
        var date = new Date(0)
        date.setUTCSeconds(timestamp)
        return utilService.formatTime(date)
    }

    return (
        <section className="weather-hour-preview">
            <span className="hour">{formatTime(hour.time)}</span>
            <span className="measure">{hour.tempC}</span>
        </section> 
    )
}