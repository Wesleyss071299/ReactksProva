import { createSlice } from '@reduxjs/toolkit';
import {RootState} from './index'
import { Types } from '../interfaces/game-interfaces'

const initialState = {
    games : [] as Types[],
    currentGame: {} as Types,
    selectedBetNumbers: [] as number[],  
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        fetchGame(state, action) {
            state.games = action.payload.games     
        },
        loadCurrentGame(state) {
            state.currentGame = state.games[0]
        },
        setGameType(state, action) {
            state.currentGame = action.payload.currentGame
        },
        addBetNumbers(state, action) {
            if(state.selectedBetNumbers.includes(action.payload.selectedNumber)){
                state.selectedBetNumbers = state.selectedBetNumbers.filter((item) => item !== action.payload.selectedNumber)
                return
            }
            state.selectedBetNumbers.push(action.payload.selectedNumber)
        },
        cleanBetNumbers(state) {
            state.selectedBetNumbers = [] 
        }
      
    }
})

export const gameActions = gameSlice.actions;
export const selectGame = (state: RootState) => state.game.games

export default gameSlice