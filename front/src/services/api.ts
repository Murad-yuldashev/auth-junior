import axios from 'axios';

// Create axios instance with basic config
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
});

// Add token to request if available
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

export default api;
