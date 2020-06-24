import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID hohRlPmZCsNmFZY2K9eLkIbeOyPVeS0FFdJabhEyXCY'
    }
})
