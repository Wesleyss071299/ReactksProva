import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user-interfaces';
import api from '../services/api';


const initialState = {
    user: {} as User,
    token: '',
    isLoggedIn: localStorage.getItem('token') ? true : false,
    isError: false,
    errorMessage: '',
    
}

export const loginUser = createAsyncThunk(
    'loginUser',
    async ({email, password}: User, thunkAPI) => {
        try {
            const response = await api.post('/sessions', {email, password})
            const data = response.data
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                console.log(data)
                return data.token
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (error) {
            console.log('Error', error.response.data.error.message);
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            state.token = ''
        },
        clearState(state) {
            state.isError = false;
            state.errorMessage = '';
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.rejected, (state, action: PayloadAction<any, string>) => {
            state.isError = true;
            state.isLoggedIn = false;
            state.errorMessage = action.payload.message
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
        });
    }
})
export const authActions = authSlice.actions;
export default authSlice;