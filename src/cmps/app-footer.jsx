import { utilService } from '../services/util.service'
import { UserMsg } from './user-msg'

export function AppFooter({ lat, lng, date }) {

    const dateToDisplay = (timestamp) => {
        return utilService.formatDate(timestamp, false)
    }

    return (
        <footer className="app-footer">
            <div className="flex space-between">
                <span>latitude {lat}</span> 
                <span>longitude {lng}</span>
            </div>
            <span>accurate to {dateToDisplay(date)}</span>
            <UserMsg />
        </footer>
    )
}