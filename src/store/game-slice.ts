import { createSlice } from '@reduxjs/toolkit';
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
        },
        generateRandomNumbers(state) {
            const total = state.currentGame['max-number'] - state.selectedBetNumbers.length;
            for (let i = 1; i <= total; i++){
                let number = Math.ceil(Math.random() * state.currentGame.range)
                if (state.selectedBetNumbers.some((item) => item === number)){
                    i--;
                } else {
                    state.selectedBetNumbers.push(number)
                }
            }
        }
      
    }
})

export const gameActions = gameSlice.actions;


export default gameSlice