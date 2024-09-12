import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory, ICategoryState} from "../../types/category";
import {fetchCategories} from "./categoryActionCreators";

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
        changeCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload.indexCategory;
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
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<string>) => {
                state.error = action.payload.error;
            })
    }
});

export const {changeCategory} = categorySlice.actions;

export default categorySlice.reducer;
