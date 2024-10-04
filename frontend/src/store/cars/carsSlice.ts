import {createSlice} from "@reduxjs/toolkit";

import {ICarItem} from "../../types/cars";
import {fetchCars} from "./carsAsyncActions";

interface ICarsState {
    cars: ICarItem [];
    error: string;
};

const initialState: ICarsState = {
    cars: [],
    error: '',
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, state => {
                state.error = '';
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.error = '';
                state.cars = action.payload;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.error = action.payload.error;
            })
    }
});

export default carsSlice.reducer;