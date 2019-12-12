import axios from 'axios'

export default {
    getAll() {
        return axios.get('/countries/')
        .then(response => {
            return response.data
        })
    },

    addCountry(country) {
        return axios.post('/country/', country)
    }
}