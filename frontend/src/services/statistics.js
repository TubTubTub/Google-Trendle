import axios from 'axios'
import { BACKEND_URL } from '../utils/constants'

const baseURL = `${BACKEND_URL}/api/statistics`

const getHistory = async (page, games_per_page) => {
    const result = await axios.get(`${baseURL}/history?page=${page}&page_size=${games_per_page}`, {
        withCredentials: true
    })

    return result.data
}

const getRankings = async (page, ranks_per_page) => {
    const result = await axios.get(`${baseURL}/rankings?page=${page}&page_size=${ranks_per_page}`, {
        withCredentials: true
    })

    return result.data
}

const getUserStatistics = async () => {
    const result = await axios.get(`${baseURL}/user`, {
        withCredentials: true
    })

    return result.data
}

export default { getHistory, getRankings, getUserStatistics }