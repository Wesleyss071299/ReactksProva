import { useEffect, useState } from 'react';
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

    const [games, setGames] = useState<ResponseData>({} as ResponseData);
    useEffect(() => {
        const getData = async() => {
            const response = await fetch('games.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
            const gamesResponse = await response.json();
            setGames(gamesResponse);
        }

        getData()
    }, [])
    return(      
        <BetContainer>
            <GameContainer>
                <h2 className="title"> NEW BET <strong>FOR</strong> <strong> mega-sena</strong></h2>
                <GameInfoContainer>
                    <h3>Choose Game</h3>
                    <ButtonsGameContainer>  
                        <button>{games.types[1].type}</button>
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