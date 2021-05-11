import { AppDispatch } from './index'
import {gameActions} from './game-slice'
import { Types } from '../interfaces/game-interfaces'

export const fetchGameData = () => {
    return async(dispatch: AppDispatch) => {
        const fetchGame = async () => {
            const response = await fetch('games.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
            const gamesResponse = await response.json();
            return gamesResponse.types;
        }
        try {
            const gameData = await fetchGame();
            dispatch(
                gameActions.fetchGame({games: gameData})
            )
            dispatch(
                gameActions.loadCurrentGame()
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
