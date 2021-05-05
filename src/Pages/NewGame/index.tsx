import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {fetchGameData} from '../../store/game-actions';
import {BetContainer, GameContainer, GameInfoContainer, ButtonsGameContainer} from './styles'

interface Types {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

interface ResponseData {
    types: Types[];

}



const NewGame = () => {
    const dispatch = useAppDispatch()
    const games = useAppSelector((state) => state.game.games)
    useEffect(() => {
        dispatch(fetchGameData())
        console.log(games)
    }, [])
    return(      
        <BetContainer>
            <GameContainer>
                <h2 className="title"> NEW BET <strong>FOR</strong> <strong> mega-sena</strong></h2>
                <GameInfoContainer>
                    <h3>Choose Game</h3>
                    <ButtonsGameContainer>  
                        <button onClick={() => console.log(games)}></button>
                    </ButtonsGameContainer>
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