import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import carsReducer from "./cars/carsSlice";
import orderReducer, {localStorageMiddleware} from "./order/orderSlice";
import modalReducer from "./modaDelivery/modalDeliverySlice"
import formReducer from "./form/formSlice"

const rootReducer = combineReducers({
    category: categoryReducer,
    cars: carsReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formReducer
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;