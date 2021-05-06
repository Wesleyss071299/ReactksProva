import React,  { MouseEvent, useEffect, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {fetchGameData} from '../../store/game-actions';
import {BetContainer, GameContainer, GameInfoContainer} from './styles'
import ButtonsGameType from '../../components/ButtonsGameType';

import { Types } from '../../interfaces/game-interfaces'




const NewGame: React.FC = () => {
    const dispatch = useAppDispatch()
    
    const games = useAppSelector((state)=> state.game.games)
    
    const [currentGame, setCurrentGame] = useState<Types>({} as Types)

    useEffect(() => {
        dispatch(fetchGameData())
    }, [dispatch])

    useEffect(() => {
        setCurrentGame(games[0])
    }, [games])

    const setGameType = (event: MouseEvent<HTMLElement>) => {
        const game = games.find((item) => item.type === event.currentTarget.getAttribute('value')) as Types
        setCurrentGame(game)
    }

    return(      
        <BetContainer>
            <GameContainer>
                <h2 className="title"> NEW BET <strong>FOR</strong> <strong>{currentGame?.type}</strong></h2>
                <GameInfoContainer>
                    <h3>Choose Game</h3>
                    <ButtonsGameType onSetGameType={setGameType}/>
                    <p>{currentGame?.description}</p>                  
                </GameInfoContainer>
            </GameContainer>
        </BetContainer>
    )
}

export default NewGame;