import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.100.8:3333'
});

export default api;