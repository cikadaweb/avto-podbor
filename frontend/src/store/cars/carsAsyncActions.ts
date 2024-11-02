import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {API_URI, POSTFIX} from "../../const";
import {ICarItem} from "../../types/cars";
import {ICategory} from "../../types/category";
import {ICarsState} from "./carsSlice";

export const fetchCars = createAsyncThunk<ICarItem[], ICategory['title'],   {
    state: { cars: ICarsState },
    rejectValue: string,
}> (
    'cars/fetch',
    async (category, {rejectWithValue}) => {
        const response = await axios.get<ICarItem[]>(`${API_URI}${POSTFIX}?category=${category}`);
        if(!response) {
            return rejectWithValue('Не удалось выполнить запрос!')
        }
        return response.data;
    })