import { MouseEvent, useEffect, useState} from 'react';
// Components
import ButtonsGameType from "../../components/ButtonsGameType";
import { IconSaveButton } from '../../components/Cart/styles'
import BetItem from '../../components/BetItem';
import Navbar from "../../components/Navbar";
// Redux
import { setCurentGameData, fetchGameData } from '../../store/game-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// Interfaces
import { Types } from '../../interfaces/game-interfaces'
import { ResponseBetData, IBet } from '../../interfaces/response-interface'
// Services 
import api from '../../services/api'

import {Container,HeaderContainer,ListContainer, NewBet} from './styles'



const Bets = () => {
    const dispatch = useAppDispatch()
    const [bets, setBets] = useState<IBet[]>([])

    useEffect(() => {
        dispatch(fetchGameData())        
    }, [dispatch])


    useEffect(() => {
        const loadBets = async () => {
            const token = localStorage.getItem('token')
            const response: ResponseBetData = await api.get('bets', { headers :  {"Authorization" : `Bearer ${token}`} })
            const data: IBet[] = response.data.map((data) => ({
                id: data.id,
                numbers: data.numbers,
                game_id: data.game_id
            }))
            setBets(prev => [...prev, ...data])
        }
        loadBets()
    }, [])
    
    const games = useAppSelector((state)=> state.game.games)
    const CurrentGame = useAppSelector((state)=> state.game.currentGame)
    
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
                    {bets.filter( (item) => item.game_id === CurrentGame.id ).map((bet) => (
                        <BetItem 
                            key={bet.id} 
                            type={CurrentGame.type} 
                            price={CurrentGame.price} 
                            betNumbers={bet.numbers} 
                            color={CurrentGame.color}  
                        />
                    ))}
                </ListContainer>
            </div>
            <NewBet to="/new">
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