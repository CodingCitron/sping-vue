import axios from './index'

function registerUser(userData) {
    return axios.post('/api/signup', userData)
}

export { registerUser }
