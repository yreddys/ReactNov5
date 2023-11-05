// axiosConfig.js
import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("AxiosError:", error);
    return Promise.reject(error);
  }
);

export default axios;
