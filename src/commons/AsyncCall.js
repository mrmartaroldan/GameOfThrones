import axios from 'axios'

export function fetchHouseList() {
    const fecthUrl = '/casas'
    return axios.get(fecthUrl)
}