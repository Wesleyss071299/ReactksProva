import { Dispatch } from 'redux'
import { AppDispatch } from '.'
import {gameActions} from './game-slice'

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
            return gamesResponse;
        }
        try {
            const gameData = await fetchGame();
            dispatch(
                gameActions.fetchGame(gameData)
            )
        } catch (error) {
            
        }
    }

}