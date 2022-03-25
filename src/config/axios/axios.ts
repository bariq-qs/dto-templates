import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/'
const axl = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Accept: '*/*',
  },
})

axl.interceptors.request.use((config: any) => config, (error: any) => Promise.reject(error))

axl.interceptors.response.use((response: any) => response, (error: any) => Promise.reject(error))

export default axl
