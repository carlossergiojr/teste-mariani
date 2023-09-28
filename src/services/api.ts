import axios from 'axios'
import Cookie from 'js-cookie'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  const token = Cookie.get('TOKEN')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

export default api
