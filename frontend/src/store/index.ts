import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, {localStorageMiddleware} from "./order/orderSlice";
import modalReducer from "./modaDelivery/modalDeliverySlice"
import formReducer from "./form/formSlice"

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formReducer
});
export const setupStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']