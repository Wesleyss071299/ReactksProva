import React,  { MouseEvent, useEffect, useState} from 'react';
import {BetContainer, GameContainer, GameInfoContainer} from './styles'

// Redux
import {fetchGameData} from '../../store/game-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// Components
import GameDescription from '../../components/GameDescription';
import ButtonsGameType from '../../components/ButtonsGameType';
// Interfaces
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
                </GameInfoContainer>

                <GameInfoContainer>
                    <GameDescription description={currentGame?.description}/>               
                </GameInfoContainer>
            </GameContainer>
        </BetContainer>
    )
}

export default NewGame;