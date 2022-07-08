import { WeatherHourPreview } from './weather-hour-preview'

export function WeatherHourList({ hours }) {

    return(
        <section className="weather-hour-list">
            {hours.map((hour, idx) => {
                return <WeatherHourPreview key={idx} hour={hour} />
            })}
        </section>
    )
}