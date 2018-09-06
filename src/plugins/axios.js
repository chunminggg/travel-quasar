import axios from 'axios'
// const baseUrl = 'http://119.29.140.92:3000/'
const baseUrl = 'http://localhost:3000/'
const baseApi = axios.create({
    baseURL: baseUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
      }
  })

  export {
      baseApi
  }