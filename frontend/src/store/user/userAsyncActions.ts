import { createAsyncThunk } from "@reduxjs/toolkit";
import {IUser} from "../../types/user";

export const loginUser = createAsyncThunk<
    { token: string },
    {
        username: string;
        password: string;
    },
    { rejectValue: string }
>(
    'user/login',
    async ({username, password}, { rejectWithValue }) => {
        try {
            const response =  await new Promise<{ token: string }>((resolve) => {
                setTimeout(() => {
                    resolve({ token: 'temp-token' });
                }, 1000);
            });
            return response;
        } catch (err) {
            return rejectWithValue('Не удалось выполнить запрос!');
        }
    }
);

export const getUser = createAsyncThunk<
    IUser,
    undefined,
    { rejectValue: string }
>(
    'user/me',
    async (_, { rejectWithValue }) => {
        try {
            const response =  await new Promise<IUser>((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: 1,
                        username: 'Cikada',
                        avatar: '',
                        email: 'cikada@gmail.com'
                    });
                }, 1000);
            });
            return response;
        } catch (err) {
            return rejectWithValue('Не удалось выполнить запрос!');
        }
    }
);