import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IUser} from "../../types/user";
import {getUser, loginUser} from "./userAsyncActions";

export interface IUserState {
    user: IUser | null;
    isAuthenticated: boolean;
    authError: string | undefined;
    userError: string | undefined;
};

const initialState: IUserState = {
    user: null,
    isAuthenticated: JSON.parse(localStorage.getItem('auth') || 'false'),
    authError: '',
    userError: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.authError = '';
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
                state.authError = '';
                state.isAuthenticated = true;
                localStorage.setItem('auth', JSON.stringify(true));
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.authError = action.payload;
            })
            .addCase(getUser.pending, state => {
                state.userError = '';
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.userError = action.payload;
            })
    }
})

export default userSlice.reducer;