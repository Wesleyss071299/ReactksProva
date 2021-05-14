import React,  { MouseEvent, useEffect } from 'react';
import {BetContainer, GameContainer, GameInfoContainer, GameActionsContainer, CartContainer} from './styles'

// Redux
import { fetchGameData, setCurentGameData, setCleanBetNumbers, setGenerateBetNumbers } from '../../store/game-actions';
import { AddCart } from '../../store/cart-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// Components
import GameDescription from '../../components/GameDescription';
import ButtonsGameType from '../../components/ButtonsGameType';
// Interfaces
import { Types } from '../../interfaces/game-interfaces'
import NumberButton from '../../components/NumberButton';
import ActionButton from '../../components/ActionsButton';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';




const NewGame: React.FC = () => {
    const dispatch = useAppDispatch()
    
    const games = useAppSelector((state)=> state.game.games)
    const currentGame = useAppSelector((state)=> state.game.currentGame)
    const betNumbers = useAppSelector((state)=> state.game.selectedBetNumbers)
    


    useEffect(() => {
        dispatch(fetchGameData())        
    }, [dispatch])


    const setGameType = (event: MouseEvent<HTMLElement>) => {
        const game = games.find((item) => item.type === event.currentTarget.getAttribute('value')) as Types
        dispatch(setCurentGameData(game))
    }

    const handleCleanGame = () => {
        dispatch(setCleanBetNumbers())
    }

    const handleCompleteGame = () => {
        dispatch(setGenerateBetNumbers())
    }

    const handleAddToCart = () => {
        dispatch(
            AddCart({
                id: new Date().getMilliseconds(), 
                numbers: betNumbers, 
                price: currentGame.price, 
                type: currentGame.type, 
                color: currentGame.color
            })
        )
        dispatch(setCleanBetNumbers())
    }

    return(      
        <>
            <Navbar/>     
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

                    <GameActionsContainer>
                        <div>
                            <ActionButton title="Complete Game" onClick={handleCompleteGame}/>
                            <ActionButton title="Clear Game" onClick={handleCleanGame}/>
                        </div>
                        <ActionButton title="Add to cart" onClick={handleAddToCart} color="#27C383"/>
                            
                    </GameActionsContainer>
                </GameContainer>
                <CartContainer>
                    <Cart/>
                </CartContainer>
            </BetContainer>
        </>
    )
}

export default NewGame;