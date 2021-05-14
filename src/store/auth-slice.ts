import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('token', state.token)
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            state.token = ''
        }

    }
})
export const authActions = authSlice.actions;
export default authSlice;