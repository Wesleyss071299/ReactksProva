import React, { MouseEvent } from 'react'
import { useAppSelector } from '../../store/hooks'
import {ButtonsGameContainer, ButtonGame} from './styles'

const ButtonsGameType: React.FC<{onSetGameType: (event: MouseEvent<HTMLElement>) => void}> = (props) => { 
 
    const games = useAppSelector((state)=> state.game.games)
    const currentGame = useAppSelector((state)=> state.game.currentGame)

   
    return(
        <ButtonsGameContainer>  
            {games.map((item) => {
                if(currentGame.type === item.type) {
                    return(
                    <ButtonGame color={item.color} key={item.type} value={item.type} onClick={(e: MouseEvent<HTMLElement>) => {
                        props.onSetGameType(e)
                    }}>
                        {item.type}
                    </ButtonGame>
                    )
                }else {
                    return (
                        <ButtonGame border={item.color} key={item.type} value={item.type} onClick={(e: MouseEvent<HTMLElement>) => {
                            props.onSetGameType(e)
                        }}>
                            {item.type}
                        </ButtonGame>
                    )
                }
            })}
        </ButtonsGameContainer>
    )
}

export default ButtonsGameType;