export const utilService = {
    formatDate
    
}

function formatDate(timestamp, isUTC) {
    var date = isUTC ? new Date(0) : new Date(timestamp)
    if(isUTC) {
        date.setUTCSeconds(timestamp)
        return (
            [date.getMonth() + 1, date.getDate(), date.getFullYear().toString().substring(2)].join('/') + ' at ' +
            [_padTo2Digits(date.getHours()), _padTo2Digits(date.getMinutes())].join(':')
        )  
    } else {
        return (
            [_padTo2Digits(date.getMonth() + 1), _padTo2Digits(date.getDate()), date.getFullYear()].join('/') + ' at ' +
            [_padTo2Digits(date.getHours()), _padTo2Digits(date.getMinutes())].join(':')
        )
    }
}

function _padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}