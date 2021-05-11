import React, { useState } from 'react'
import { ChooseNumber, Number } from './styles';
const NumberButton: React.FC<{range: number}> = (props) => {
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
    
    return(
        <ChooseNumber>
            {numbers.map((item, index) => 
                <Number 
                    key={item} 
                    color={selectedNumbers.includes(index + 1) ? '#27C383' : ''} 
                    onClick={() => handleClick(index)}>{+item + 1}
                </Number>
            )}
        </ChooseNumber>
    )
}  

export default NumberButton;