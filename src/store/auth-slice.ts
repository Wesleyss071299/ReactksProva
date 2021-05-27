import { createSlice } from '@reduxjs/toolkit';
import { User } from '../interfaces/user-interfaces';

const initialState = {
    users: [] as User[],
    token: '',
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {  
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.users.push(action.payload.user)
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