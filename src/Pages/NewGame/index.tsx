import React,  { MouseEvent, useEffect, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {fetchGameData} from '../../store/game-actions';
import {BetContainer, GameContainer, GameInfoContainer, ButtonsGameContainer, ButtonGame} from './styles'

type Types  = {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

interface IProps{
    color?: string
}


const NewGame: React.FC<IProps> = () => {
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
                    <ButtonsGameContainer>  
                        {games.map((item) => (
                            <ButtonGame color={item.color} key={item.type} value={item.type} onClick={setGameType}>
                                {item.type}
                            </ButtonGame>
                        ))}
                    </ButtonsGameContainer>
                    <p>{currentGame?.description}</p>
                    
                </GameInfoContainer>
            </GameContainer>
            <GameContainer>
                <div>
                    <h3>Cart</h3>
                </div>
            </GameContainer>
        </BetContainer>
    )
}

export default NewGame;