import React,  { MouseEvent, useEffect } from 'react';
import {BetContainer, GameContainer, GameInfoContainer} from './styles'

// Redux
import { fetchGameData, setCurentGameData } from '../../store/game-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// Components
import GameDescription from '../../components/GameDescription';
import ButtonsGameType from '../../components/ButtonsGameType';
// Interfaces
import { Types } from '../../interfaces/game-interfaces'
import NumberButton from '../../components/NumberButton';




const NewGame: React.FC = () => {
    const dispatch = useAppDispatch()
    
    const games = useAppSelector((state)=> state.game.games)
    const currentGame = useAppSelector((state)=> state.game.currentGame)


    useEffect(() => {
        dispatch(fetchGameData())        
    }, [dispatch])


    const setGameType = (event: MouseEvent<HTMLElement>) => {
        const game = games.find((item) => item.type === event.currentTarget.getAttribute('value')) as Types
        dispatch(setCurentGameData(game))
    }

    return(      
        <BetContainer>
            <GameContainer>
                <h2 className="title"> NEW BET <strong>FOR</strong> <strong>{currentGame.type}</strong></h2>
                <GameInfoContainer>
                    <h3>Choose Game</h3>
                    <ButtonsGameType onSetGameType={setGameType} />
                </GameInfoContainer>

                <GameInfoContainer>
                    <GameDescription description={currentGame.description}/>               
                </GameInfoContainer>
                <NumberButton range={currentGame.range}/>
            </GameContainer>
        </BetContainer>
    )
}

export default NewGame;