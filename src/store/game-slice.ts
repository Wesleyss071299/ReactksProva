import { createSlice } from '@reduxjs/toolkit';
import {RootState} from './index'
import { Types } from '../interfaces/game-interfaces'

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