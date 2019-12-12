import axios from 'axios'

export default {
    getAll() {
        return axios.get('/cards/')
        .then(response => {
            return response.data
        })
    },

    addCard(card) {
        return axios.post('/cards/'+card.number)
    }
}