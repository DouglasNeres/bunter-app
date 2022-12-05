import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sendmessages-deploy-production.up.railway.app'
})