import React, { MouseEvent } from 'react'
import { useAppSelector } from '../../store/hooks'
import {ButtonsGameContainer, ButtonGame} from './styles'

const ButtonsGameType: React.FC<{onSetGameType: (event: MouseEvent<HTMLElement>) => void}> = (props) => { 
   
    const games = useAppSelector((state)=> state.game.games)
   
    return(
        <ButtonsGameContainer>  
            {games.map((item) => (
                <ButtonGame color={item.color} key={item.type} value={item.type} onClick={props.onSetGameType}>
                    {item.type}
                </ButtonGame>
            ))}
        </ButtonsGameContainer>
    )
}

export default ButtonsGameType;