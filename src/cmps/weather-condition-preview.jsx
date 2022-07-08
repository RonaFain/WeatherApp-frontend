export function WeatherConditionPreview({ condition }) {
    return (
        <section className="weather-condition-preview">
            <span className="condition">{condition.type}</span>
            <span className="measure">{condition.value} {condition.unit}</span>
        </section>
    )
}