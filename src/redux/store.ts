import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./slice/showCartSlice";
import cartItemsReducer from "./slice/cartItemsSlice";
import searchReducer from "./slice/searchSlice";

export const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        cartItems: cartItemsReducer,
        search: searchReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
