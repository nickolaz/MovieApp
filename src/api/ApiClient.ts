import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AppConfig } from "../config/config";

axios.create({
    baseURL: AppConfig.apiBaseUrl,
    timeout: AppConfig.apiTimeout,
    headers: { 
        'Content-Type': 'application/json'
    },
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {    
    return config;
});

axios.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
});

export default axios;