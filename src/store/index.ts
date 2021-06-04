import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

import gameSlice from './game-slice';
import cartSlice from './cart-slice';
import authSlice from './auth-slice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducer = combineReducers({
    game : gameSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
});

let persistor = persistStore(store)

export {store, persistor}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch