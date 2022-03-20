import axios from 'axios'

export default axios.create({
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    },
    baseURL: process.env.VUE_APP_API_URL,
})

// example: instance.post(url, data)
// https://joshua1988.github.io/vue-camp/advanced/folder-structure.html#%E1%84%87%E1%85%B2-cli%E1%84%85%E1%85%A9-%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5-%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9

// https://yamoo9.github.io/axios/guide/api.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1
