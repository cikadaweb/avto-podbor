import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {API_URI, POSTFIX} from "../../const";
import {ICarItem} from "../../types/cars";
import {ICarsState} from "./carsSlice";

export const fetchCars = createAsyncThunk<ICarItem[], string, { state: { cars: ICarsState } }> (
    'cars/fetch',
    async (category, thunkAPI) => {
        try {
            const response = await axios.get<ICarItem[]>(`${API_URI}${POSTFIX}?category=${category}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Не удалось выполнить запрос!')
        }
    },
    {
        condition: (category: string, { getState }) => {
            const { error } = getState().cars;

            if (error) {
                return false;
            }
        }
    })