import { WeatherConditionPreview } from './weather-condition-preview'

export function WeatherConditionList({ conditions }) {
    return(
        <section className="weather-condition-list">
            {conditions.map((condition, idx) => {
                return <WeatherConditionPreview key={idx} condition={condition} />
            })}
        </section>
    )
}