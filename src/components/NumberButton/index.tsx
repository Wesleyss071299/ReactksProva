import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { ChooseNumber, Number } from './styles';
const NumberButton: React.FC<{range: number}> = (props) => {

    const currentGame = useAppSelector((state)=> state.game.currentGame)

    let numbers = []
    for (let i = 0; i < props.range; i++) {
        numbers.push(i)
    }
    
    const [selectedNumbers, setSelectedNumbers ] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (selectedNumbers.includes(index + 1)) {
            setSelectedNumbers(prev => (
                prev.filter((item) => item !== index + 1)
            ))
            return
        }
        setSelectedNumbers((prev) => [...prev, index + 1]);
    }

    useEffect(() => {
        setSelectedNumbers([])
    }, [currentGame])
    
    return(
        <ChooseNumber>
            {numbers.map((item, index) => 
                <Number 
                    key={item} 
                    background={selectedNumbers.includes(index + 1) ? '#27C383' : ''} 
                    onClick={() => handleClick(index)}>{+item + 1}
                </Number>
            )}
        </ChooseNumber>
    )
}  

export default NumberButton;