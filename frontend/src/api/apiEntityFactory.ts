import {ApiRequestManager} from './apiRequestManager';
import {IMessageType} from '../types/notification';

import {AxiosResponse} from 'axios';

const {createEntity, getEntity, patchEntity, deleteEntity} =
    ApiRequestManager();

export const ApiEntityFactory = (entityName: string) => {
    // URL Pattern: /entity
    // URL Pattern: /entity/id
    const get = async <T>(
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void,
        entityId?: string,
        query?: Record<string, any>
    ): Promise<AxiosResponse<T> | undefined> => {
        try {
            return await getEntity<T>(entityName, entityId ?? '', query);
        } catch (error: any) {
            if (error.response) {
                errorHandler(
                    error.response.data.message ?? 'Ошибка со стороны сервера',
                    'error'
                );
            } else {
                errorHandler('Ошибка со стороны сервера', 'error');
            }
            throw error;
        }
    };

    // URL Pattern: /entity/sub-entity
    const getSub = async <T>(
        subEntityName: string,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void,
        query?: Record<string, any>
    ): Promise<AxiosResponse<T> | undefined> => {
        const subEntityUrl = `${entityName}/${subEntityName}`;
        try {
            return await getEntity<T>(subEntityUrl, '', query);
        } catch (error: any) {
            if (subEntityName === 'get_info') {
                errorHandler('Вы не авторизованы', 'error');
            } else {
                errorHandler(
                    error.response.data.message ?? 'Ошибка со стороны сервера',
                    'error'
                );
            }
            throw error;
        }
    };

    // URL Pattern: /entity/sub-entity/id
    const getSubById = async <T>(
        subEntityName: string,
        subEntityID: string,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void,
        query?: Record<string, any>
    ): Promise<AxiosResponse<T>> => {
        const subEntityPrefix = `${entityName}/${subEntityName}`;
        try {
            return await getEntity<T>(subEntityPrefix, subEntityID, query);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    // URL Pattern: /entity/id/sub-entity
    const getSubOfSpecificEntity = async <T>(
        entityID: string,
        subEntityName: string,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void,
        query?: Record<string, any>
    ): Promise<AxiosResponse<T> | undefined> => {
        const subEntityPostfix = `${entityID}/${subEntityName}`;
        try {
            return await getEntity<T>(entityName, subEntityPostfix, query);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    // URL Pattern: /entity/sub-entity/id/sub-id
    const getSpecificSubOfSpecificEntity = async <T>(
        subEntityName: string,
        entityID: string,
        entitySubID: string,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void,
        query?: Record<string, any>
    ): Promise<AxiosResponse<T> | undefined> => {
        const subEntityPostfix = `${subEntityName}/${entityID}/${entitySubID}`;
        try {
            return await getEntity<T>(entityName, subEntityPostfix, query);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    const remove = async <T>(
        data: Record<string, any> | string[] | number[],
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void
    ): Promise<AxiosResponse<any, any>> => {
        try {
            return await deleteEntity<T>(entityName, data);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    const patch = async <T>(
        entityId: string,
        data: Record<string, any>,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void
    ): Promise<AxiosResponse<T> | undefined> => {
        try {
            return await patchEntity<T>(entityName, entityId, data);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    const post = async <T>(
        data: Record<string, any>,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void
    ): Promise<AxiosResponse<T> | undefined> => {
        try {
            return await createEntity(entityName, data);
        } catch (error: any) {
            errorHandler(
                error.response.data.message ?? 'Ошибка со стороны сервера',
                'error'
            );
            throw error;
        }
    };

    //URL Pattern: /entity/sub-entity
    const postSub = async <T>(
        subEntity: string,
        data: Record<string, any>,
        errorHandler: (
            message: string,
            type: IMessageType,
            showTime?: number
        ) => void
    ): Promise<AxiosResponse<T> | undefined> => {
        const subEntityPostfix = `${entityName}/${subEntity}`;
        try {
            return await createEntity(subEntityPostfix, data);
        } catch (error: any) {
            if (error.response) {
                errorHandler(
                    error.response.data.message ?? 'Ошибка со стороны сервера',
                    'error'
                );
            } else {
                errorHandler('Ошибка со стороны сервера', 'error');
            }
        }
    };

    return {
        get,
        getSub,
        getSubById,
        getSubOfSpecificEntity,
        getSpecificSubOfSpecificEntity,
        remove,
        patch,
        post,
        postSub,
    };
};
