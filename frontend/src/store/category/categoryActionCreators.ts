import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URI, POSTFIX} from "../../const";
import axios from "axios";
import {ICategory} from "../../types/category";

export const fetchCategories = createAsyncThunk(
    'category/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICategory[]>(`${API_URI}${POSTFIX}/category`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Не удалось выполнить запрос!')
        }
    })