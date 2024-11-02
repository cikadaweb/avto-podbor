import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../../types/category";
import {fetchCategories} from "./categoryAsyncActions";

export interface ICategoryState {
    category: ICategory[];
    isLoading: boolean;
    error: string | undefined;
    activeCategory: number;
}

const initialState: ICategoryState = {
    category: [],
    isLoading: false,
    error: '',
    activeCategory: 0,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action: PayloadAction<ICategoryState['activeCategory']>) {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.error = '';
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
                state.error = '';
                state.category = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.error = action.payload;
            })
    }
});

export const {changeCategory} = categorySlice.actions;

export default categorySlice.reducer;
