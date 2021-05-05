import { AppDispatch } from './index'
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
            return gamesResponse.types;
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