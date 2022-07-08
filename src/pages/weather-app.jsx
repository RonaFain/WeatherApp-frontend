import { SearchForm } from '../cmps/search-form'
import { AppFooter } from '../cmps/app-footer'
 
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
                {/* <footer>
                    <span>latitude 32.07 longitude 34.76</span>
                    <span>accurate to 13/02/2022 at 16:24</span>
                </footer> */}
                <AppFooter />
            </div>
            <div className="weather-container">
                <div className="weather-info">
                    <div className="weather-title">
                        <span className="weather-city">Tel Aviv</span>
                        <span className="weather-country">Israel</span>
                        <span className="weather-date">13/2/22 at 16:00</span>
                    </div>
                    <div className="weather-temp">
                        <span className="temp">18</span>
                        <span className="description">sunny</span>
                    </div>
                    <div className="weather-details">
                        <div>
                            <span className="title">precipitation</span>
                            <span className="measure">0 mm</span>
                        </div>
                        <div>
                            <span className="title">humidity</span>
                            <span className="measure">53%</span>
                        </div>
                        <div>
                            <span className="title">wind</span>
                            <span className="measure">28 km/h</span>
                        </div>
                    </div>
                    <div className="weather-hours">
                        <div>
                            <span className="hour">13:00</span>
                            <span className="measure">19</span>
                        </div>
                        <div>
                            <span className="hour">14:00</span>
                            <span className="measure">19</span>
                        </div>
                        <div>
                            <span className="hour">15:00</span>
                            <span className="measure">20</span>
                        </div>
                        <div>
                            <span className="hour">16:00</span>
                            <span className="measure">18</span>
                        </div>
                        <div>
                            <span className="hour">17:00</span>
                            <h6 className="measure">16</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}