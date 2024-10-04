import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {API_URI, POSTFIX} from "../../const";
import {ICarItem} from "../../types/cars";

export const fetchCars = createAsyncThunk(
    'cars/fetch',
    async (category: string, thunkAPI) => {
        try {
            const response = await axios.get<ICarItem[]>(`${API_URI}${POSTFIX}?category=${category}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Не удалось выполнить запрос!')
        }
    })