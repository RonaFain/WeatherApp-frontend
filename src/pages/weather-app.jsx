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
    

    const debouncedSearchTerm = useDebounce(searchTxt, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true)
            loadLocation(debouncedSearchTerm)
          } 
    }, [debouncedSearchTerm])

    const loadLocation = async (txt) => {
        try {
            if (!txt) {
                const defaultLoc = await weatherService.query('Tel Aviv')
                setLocWeather(defaultLoc)
            } else {
                const weather =  await weatherService.query(txt)
                setIsSearching(false)
                setLocWeather(weather)
            }
        } catch (err) {
            showErrorMsg(`Cannot find the weather for ${txt}`)
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
                <p>
                    Use our weather app to see the weather around the world
                </p>
                <SearchForm onSetSearch={onSetSearch} />
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