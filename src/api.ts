import axios from 'axios';
import config from './Config';

const api = axios.create({
    baseURL: config.backendApiUrl,
    auth: {
        username: config.apiUsername,
        password: config.apiPassword
    },
    headers: {
        "ngrok-skip-browser-warning": "true"
    },
    withCredentials: true
});

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token)
//             config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

export default api;