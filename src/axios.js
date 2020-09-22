import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kevin-tinder-clone.herokuapp.com'
})

export default instance;

// import axios from 'axios'

// const instance = axios.create({
//     baseUrl: 'http://localhost:8001'
// })

// export default instance;