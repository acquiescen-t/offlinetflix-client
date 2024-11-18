import axios from 'axios';

const api = axios.create({
    baseURL: 'https://monkfish-living-tadpole.ngrok-free.app/api/v1',
    headers: {
        "ngrok-skip-browser-warning": "69420",
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