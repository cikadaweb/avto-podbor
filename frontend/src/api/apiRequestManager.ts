import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {APIInstance, APIWSInstance} from './apiAxiosInstances';

export const ApiRequestManager = () => {
    const createConfig = (
        params?: Record<string, string | number>
    ): AxiosRequestConfig => {
        return <AxiosRequestConfig>{
            params: {
                ...params,
            },
        };
    };
    const prepareRequestUrl = (entityName: string, id?: string) => {
        return import.meta.env.VITE_API_PREFIX + entityName + (id ? `/${id}` : '');
    };

    //GET & GET{ID}
    const getEntity = async <T>(
        entityName: string,
        id?: string,
        query?: Record<any, any>
    ): Promise<AxiosResponse<T>> => {
        const config = createConfig(query);
        const url: string = prepareRequestUrl(entityName, id ?? '');
        try {
            return await APIWSInstance.get(url, config);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    //POST
    const createEntity = async (
        entityName: string,
        data: Record<string, any>
    ) => {
        const config: AxiosRequestConfig = createConfig();
        const url = prepareRequestUrl(entityName);
        try {
            const response: AxiosResponse = await APIWSInstance.post(
                url,
                data,
                config
            );
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    //PUT
    const updateEntity = async (
        entityName: string,
        id: string,
        data: Record<string, any>
    ) => {
        const config: AxiosRequestConfig = createConfig();
        const url = prepareRequestUrl(entityName, id) + '/';
        try {
            const response: AxiosResponse = await APIWSInstance.put(
                url,
                data,
                config
            );
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    //PATCH
    const patchEntity = async <T>(
        entityName: string,
        id: string,
        data: Record<string, any>
    ): Promise<AxiosResponse<T>> => {
        const config: AxiosRequestConfig = createConfig();
        const url = prepareRequestUrl(entityName, id);
        try {
            return await APIWSInstance.patch(url, data, config);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    //DELETE
    const deleteEntity = async <T>(
        entityName: string,
        data: Record<string, any> | string[] | number[]
    ): Promise<AxiosResponse<T>> => {
        const config: AxiosRequestConfig = createConfig();
        config.data = data;
        const url = prepareRequestUrl(entityName);
        try {
            return await APIWSInstance.delete(url, config);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    return {
        createEntity,
        getEntity,
        updateEntity,
        patchEntity,
        deleteEntity,
    };
};
