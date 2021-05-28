import React, { useEffect } from 'react'
import { ChooseNumber, Number } from './styles';

import { setSelectedBetNumbers, setCleanBetNumbers } from '../../store/game-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const NumberButton: React.FC<{range: number}> = (props) => {
    const dispatch = useAppDispatch()
    const currentGame = useAppSelector((state)=> state.game.currentGame)
    const betNumbers = useAppSelector((state)=> state.game.selectedBetNumbers)

    let numbers = []
    
    for (let i = 0; i < props.range; i++) {
        numbers.push(i)
    }
    
    const handleClick = (index: number) => {
        dispatch(setSelectedBetNumbers(index + 1))
    }
    
    useEffect(() => {
        dispatch(setCleanBetNumbers())
    }, [currentGame, dispatch])

    return(
        <ChooseNumber>
            {numbers.map((item, index) => 
                <Number 
                    key={item} 
                    background={betNumbers.includes(index + 1) ? '#27C383' : ''} 
                    onClick={() => handleClick(index)}>{+item + 1}
                </Number>
            )}
        </ChooseNumber>
    )
}  

export default NumberButton;