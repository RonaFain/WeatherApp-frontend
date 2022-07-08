import { useState, useEffect } from 'react'
import { weatherService } from '../services/weather.service'
import useDebounce from '../hooks/useDebounce'

import { SearchForm } from '../cmps/search-form'
import { AppFooter } from '../cmps/app-footer'
import { WeatherTitle } from '../cmps/weather-title'
import { WeatherTemp } from '../cmps/weather-temp'
import { WeatherCondition } from '../cmps/weather-condition'
import { WeatherHour } from '../cmps/weather-hour'
 
import Logo from '../asstes/imgs/logo.svg'


export function WeatherApp() {
    const [searchTxt, setSearchTxt] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    

    const debouncedSearchTerm = useDebounce(searchTxt, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true)
            loadLocation(debouncedSearchTerm).then(results => {
              setIsSearching(false)
              console.log('results????' , results)
            //   setResults(results);
            })
          } else {
            // setResults([]);
          }
    }, [debouncedSearchTerm])

    const loadLocation = async (txt) => {
        try {
            if (!txt) return
            return await weatherService.query(txt)
        } catch (err) {
            
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