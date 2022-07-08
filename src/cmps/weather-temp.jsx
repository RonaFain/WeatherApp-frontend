export function WeatherTemp({ temp, description }) {
    return(
        <div className="weather-temp">
            <span className="temp">{temp}</span>
            <span className="description">{description}</span>
        </div>
    )
}