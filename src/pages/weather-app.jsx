import { SearchForm } from '../cmps/search-form'
import { AppFooter } from '../cmps/app-footer'

import { WeatherTitle } from '../cmps/weather-title'
import { WeatherTemp } from '../cmps/weather-temp'
import { WeatherCondition } from '../cmps/weather-condition'
import { WeatherHour } from '../cmps/weather-hour'
 
import Logo from '../asstes/imgs/logo.svg'

export function WeatherApp() {
    return(
        <section className="weather-app">
            <div className="content">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>
                <p>
                    Use our weather app to see the weather around the world
                </p>
                <SearchForm />
                <AppFooter />
            </div>
            <div className="weather-container">
                <div className="weather-info">
                    <WeatherTitle />
                    <WeatherTemp />
                    <WeatherCondition />
                    <WeatherHour />
                </div>
            </div>
        </section>
    )
}