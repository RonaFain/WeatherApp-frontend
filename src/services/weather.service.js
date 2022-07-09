import { httpService } from './http.service'

export const weatherService = {
    query
}

async function query(text) {
    const queryStr = `?city=${text ?  text : 'Tel aviv'}`
    return await httpService.get(`weather${queryStr}`)
}