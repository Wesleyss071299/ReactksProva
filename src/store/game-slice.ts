import { createSlice } from '@reduxjs/toolkit';
import {RootState} from './index'

type Types = {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}


const initialState = {
    games : [] as Types[]
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        fetchGame(state, action) {
            state.games = action.payload.games
           
        }
    }
})

export const gameActions = gameSlice.actions;
export const selectGame = (state: RootState) => state.game.games

export default gameSlice