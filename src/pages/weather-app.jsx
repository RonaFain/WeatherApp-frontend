import { useState, useEffect } from 'react'
import { weatherService } from '../services/weather.service'
import { showErrorMsg } from '../services/event-bus.service'
import useDebounce from '../hooks/useDebounce'

import { SearchForm } from '../cmps/search-form'
import { AppFooter } from '../cmps/app-footer'
import { WeatherTitle } from '../cmps/weather-title'
import { WeatherTemp } from '../cmps/weather-temp'
import { WeatherConditionList } from '../cmps/weather-condition-list'
import { WeatherHourList } from '../cmps/weather-hour-list'
 
import Logo from '../asstes/imgs/logo.svg'


export function WeatherApp() {
    const [locWeather, setLocWeather] = useState(null)
    const [searchTxt, setSearchTxt] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    

    const debouncedSearchTerm = useDebounce(searchTxt, 1000);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true)
            loadLocation(debouncedSearchTerm)
        } else {
            loadLocation('Tel Aviv')
        }
    }, [debouncedSearchTerm])

    const loadLocation = async (txt) => {
        try {
            if (txt) setIsSearching(false)
            const cityName = (!txt) ? locWeather.city : txt

            // const weather =  await weatherService.query(cityName)
            // localStorage.setItem('weather', JSON.stringify(weather))
            const weather = JSON.parse(localStorage.getItem('weather'))
            console.log('weather???', weather)
            setLocWeather(weather)
        } catch (err) {
            showErrorMsg(`Cannot find the weather for ${txt}`)
            setSearchTxt('')
        }
    }

    const onSetSearch = (txt) => {
        setSearchTxt(txt)
    }

    return(
        <section className="weather-app">
            <div className="content">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="main-container">
                    <p>
                        Use our weather app to see the weather around the world
                    </p>
                    <SearchForm onSetSearch={onSetSearch} searchTxt={searchTxt} />
                </div>
                {locWeather && <AppFooter lat={locWeather.lat} lng={locWeather.lng} date={Date.now()} />}
            </div>
            <div className="weather-container">
                {locWeather && <div className="weather-info">
                        <WeatherTitle city={locWeather.city} country={locWeather.country} date={locWeather.lastUpdate} />
                        <WeatherTemp temp={locWeather.tempC} description={locWeather.description} />
                        <WeatherConditionList conditions={locWeather.conditions} />
                        <WeatherHourList hours={locWeather.hours} />
                    </div>
                }
            </div>
        </section>
    )
}