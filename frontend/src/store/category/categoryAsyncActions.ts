import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

import {API_URI, POSTFIX} from "../../const";
import {ICategory} from "../../types/category";

export const fetchCategories = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
    'category/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<ICategory[]>(`${API_URI}${POSTFIX}/category`);
            return response.data
        } catch (err) {
            return rejectWithValue('Не удалось выполнить запрос!')
        }
    })