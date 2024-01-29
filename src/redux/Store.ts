import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/cart/cartSlice';
import productReducer from './Features/Product/ProductSlice';
import { api } from './api/ApiSlice';
import { userReducer } from './Features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;