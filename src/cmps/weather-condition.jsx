export function WeatherCondition() {
    return(
        <section className="weather-condition">
            <div>
                <span className="condition">precipitation</span>
                <span className="measure">0 mm</span>
            </div>
            <div>
                <span className="condition">humidity</span>
                <span className="measure">53%</span>
            </div>
            <div>
                <span className="condition">wind</span>
                <span className="measure">28 km/h</span>
            </div>
        </section>
    )
}