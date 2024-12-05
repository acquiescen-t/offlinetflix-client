import axios from 'axios';
import config from './Config';

const api = axios.create({
    baseURL: config.externalApiUrl,
    headers: {
        accept: "application/json",
        Authorization: config.token
    },
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