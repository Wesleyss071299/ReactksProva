import { createSlice } from '@reduxjs/toolkit';
import {RootState} from './index'
const gameSlice = createSlice({
    name: 'game',
    initialState: {
        games: []
    },
    reducers: {
        fetchGame(state, action) {
            state.games = action.payload.games;
        }
    }
})

export const gameActions = gameSlice.actions;
export const selectGame = (state: RootState) => state.game.games

export default gameSlice