import { MouseEvent, useEffect } from 'react';
import ButtonsGameType from "../../components/ButtonsGameType";
import { IconSaveButton } from '../../components/Cart/styles'
import Navbar from "../../components/Navbar";
import { setCurentGameData, fetchGameData } from '../../store/game-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Types } from '../../interfaces/game-interfaces'
import {Container,HeaderContainer,ListContainer, NewBet} from './styles'
import BetItem from '../../components/BetItem';
const Bets = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGameData())        
    }, [dispatch])
    
    const games = useAppSelector((state)=> state.game.games)
    
    const setGameType = (event: MouseEvent<HTMLElement>) => {
        const game = games.find((item) => item.type === event.currentTarget.getAttribute('value')) as Types
        dispatch(setCurentGameData(game))
    }
    return(
        <>
        <Navbar/>
        <Container>
            <div>
                <HeaderContainer>
                    <h1>Recent games</h1> 
                    <p>Filters</p>
                    <ButtonsGameType onSetGameType={setGameType} />
                </HeaderContainer>
                <ListContainer>
                    <BetItem />
                    <BetItem />
                    <BetItem />
                    <BetItem />
                    <BetItem />
                    <BetItem />
                </ListContainer>
            </div>
            <NewBet>
                <h1>New Bet</h1>
                <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </IconSaveButton>
            </NewBet>
        </Container>
        </>
    )
}
export default Bets;