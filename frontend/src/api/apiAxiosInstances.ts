import axios, {AxiosInstance} from 'axios';
import {commonConfig, websocketConfig} from './apiConfigs';
// import router from '@/router';
const APIInstance: AxiosInstance = axios.create(commonConfig);
APIInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            !error.response ||
            error.response.status === 401 ||
            error.response.status === 403
        ) {
            //router.push({name: 'Auth'});
            console.log('Перекидываем на авторизацию!');
        }
        throw error;
    }
);

const APIWSInstance: AxiosInstance = axios.create(websocketConfig);

export {APIInstance, APIWSInstance};