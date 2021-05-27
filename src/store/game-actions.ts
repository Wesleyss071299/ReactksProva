import { AppDispatch } from './index'
import {gameActions} from './game-slice'
import { Types } from '../interfaces/game-interfaces'
import api from '../services/api'
export const fetchGameData = () => {
    return async(dispatch: AppDispatch) => {
        const fetchGame = async () => {
            const token = localStorage.getItem('token')
            const response = await api.get('games', { headers :  {"Authorization" : `Bearer ${token}`}})
            const gamesResponse = response.data;
            return gamesResponse;
        }
        try {
            const gameData = await fetchGame();
            dispatch(
               gameActions.fetchGame({games: gameData})
            )
        } catch (error) {
            
        }
    }

}
export const setCurentGameData = (currentGame: Types) => {
    return (dispatch: AppDispatch) => {
        dispatch(gameActions.setGameType({currentGame}))
    }
}

export const setSelectedBetNumbers = (number: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(gameActions.addBetNumbers({selectedNumber: number}))
    }

}
export const setCleanBetNumbers = () => {
    return (dispatch: AppDispatch) => {
        dispatch(gameActions.cleanBetNumbers())
    }
}

export const setGenerateBetNumbers = () => {
    return (dispatch: AppDispatch) => {
        dispatch(gameActions.generateRandomNumbers())
    }
}
