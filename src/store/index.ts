import { configureStore } from '@reduxjs/toolkit'

import gameSlice from './game-slice';
import cartSlice from './cart-slice';
import authSlice from './auth-slice';

const store = configureStore({
    reducer: {
        game : gameSlice.reducer,
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch